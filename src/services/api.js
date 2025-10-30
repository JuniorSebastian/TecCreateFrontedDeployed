import axios from 'axios';

// ✅ Usa variable de entorno para adaptarse a producción o desarrollo
// Soporta ambos nombres: REACT_APP_API_URL (CRA) y NEXT_PUBLIC_API_URL (Vercel/Next)
// Orden de prioridad: REACT_APP_API_URL -> NEXT_PUBLIC_API_URL -> localhost (dev)
const API_BASE_URL =
  process.env.REACT_APP_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// ✅ Instancia de Axios con token JWT automático
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Interceptor de respuestas para manejar errores 403 (suspendido/inactivo/sin permisos)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      const currentPath = window.location.pathname;
      const errorMessage = error.response?.data?.message || error.response?.data?.error || '';
      const errorMessageLower = errorMessage.toLowerCase();

      // 🛡️ PROTECCIÓN ABSOLUTA: NUNCA NUNCA NUNCA redirigir si estás en /contacto
      // Esta página es 100% accesible para TODOS, incluidos usuarios suspendidos
      // Los usuarios suspendidos DEBEN poder enviar reportes desde aquí
      if (currentPath === '/contacto') {
        console.warn('🛡️🛡️🛡️ [CONTACTO PROTEGIDO] Error 403 detectado pero estás en /contacto');
        console.warn('   ✋ BLOQUEANDO cualquier intento de redirección');
        console.warn('   📍 Ruta actual:', currentPath);
        console.warn('   ⚠️ Mensaje de error:', errorMessage);
        console.warn('   ✅ El formulario mostrará el error sin redirigir');
        // SALIR INMEDIATAMENTE - No ejecutar NADA más
        return Promise.reject(error);
      }

      // Protección secundaria para otras páginas públicas
      const paginasPublicas = ['/cuenta-suspendida', '/', '/login'];
      if (paginasPublicas.includes(currentPath)) {
        console.warn('⚠️ Error 403 en página pública, NO redirigiendo. Página:', currentPath);
        return Promise.reject(error);
      }

      // Usuario suspendido - redirigir a página de cuenta suspendida
      if (errorMessageLower.includes('suspendida') || errorMessageLower.includes('suspendido') || 
          errorMessage.includes('Tu cuenta está suspendida. Contacta con soporte.')) {
        console.error('🚫 Cuenta suspendida detectada - Verificando si podemos redirigir...');
        console.error('   📍 Ruta actual:', currentPath);
        
        // DOBLE VERIFICACIÓN: Asegurar que NO estamos en /contacto
        if (currentPath !== '/contacto' && currentPath !== '/cuenta-suspendida') {
          console.error('   ➡️ Redirigiendo a /cuenta-suspendida');
          localStorage.removeItem('token');
          localStorage.removeItem('usuario');
          window.location.href = '/cuenta-suspendida';
        } else {
          console.error('   ✋ NO redirigiendo porque estás en página permitida');
        }
        return Promise.reject(new Error('Tu cuenta ha sido suspendida. Contacta con soporte.'));
      }

      // Usuario inactivo - permitir navegar pero mostrar advertencia
      if (errorMessageLower.includes('inactiva') || errorMessageLower.includes('inactivo')) {
        console.warn('⚠️ Cuenta inactiva. Algunas funciones están limitadas.');
        return Promise.reject(new Error('Tu cuenta está inactiva. No puedes crear o exportar presentaciones.'));
      }

      // Permisos insuficientes - redirigir según rol
      if (errorMessageLower.includes('permisos') || errorMessageLower.includes('autorizado')) {
        console.warn('⚠️ Permisos insuficientes detectados');
        console.warn('   📍 Ruta actual:', currentPath);
        
        // VERIFICACIÓN: NO redirigir si estamos en páginas permitidas
        if (currentPath === '/contacto' || currentPath === '/cuenta-suspendida') {
          console.warn('   ✋ NO redirigiendo porque estás en página permitida');
          return Promise.reject(new Error('No tienes permisos para acceder a este recurso.'));
        }
        
        const usuarioRaw = localStorage.getItem('usuario');
        const usuario = usuarioRaw ? JSON.parse(usuarioRaw) : null;
        const rol = usuario?.rol?.toLowerCase();

        console.warn('   ➡️ Redirigiendo según rol:', rol);
        
        // Redirigir al dashboard correspondiente
        if (rol === 'admin') {
          window.location.href = '/admindashboard';
        } else if (rol === 'soporte') {
          window.location.href = '/soporte';
        } else {
          window.location.href = '/perfil';
        }

        return Promise.reject(new Error('No tienes permisos para acceder a este recurso.'));
      }

      // Si llegamos aquí, es un 403 genérico sin categoría específica
      console.warn('⚠️ Error 403 sin categoría específica - NO redirigiendo');
    }

    return Promise.reject(error);
  }
);

// =======================
// 🔹 PRESENTACIONES
// =======================

/**
 * GET /presentaciones/mias - Lista de presentaciones del usuario
 */
export const obtenerMisPresentaciones = () =>
  axiosInstance.get('/presentaciones/mias');

/**
 * GET /presentaciones/:id - Obtener una presentación por ID
 * @param {String} id
 */
export const obtenerPresentacionPorId = (id) =>
  axiosInstance.get(`/presentaciones/${id}`).then(res => res.data);

/**
 * POST /presentaciones - Crear nueva presentación
 * @param {Object} data
 */
export const crearPresentacion = (data) =>
  axiosInstance.post('/presentaciones', data);

/**
 * PUT /presentaciones/:id - Actualizar presentación
 * @param {String} id
 * @param {Object} data
 */
export const actualizarPresentacion = (id, data) =>
  axiosInstance.put(`/presentaciones/${id}`, data);

/**
 * DELETE /presentaciones/:id - Eliminar presentación
 * @param {String} id
 */
export const eliminarPresentacion = (id) =>
  axiosInstance.delete(`/presentaciones/${id}`);

/**
 * GET /presentaciones/:id/export - Descargar presentación como PPTX
 * @param {String|Number} id
 */
export const exportarPresentacion = (id) =>
  axiosInstance.get(`/presentaciones/${id}/export`, {
    responseType: 'blob',
  });

/**
 * POST /presentaciones/:id/share - Generar enlace y QR para compartir
 * @param {String|Number} id
 */
export const compartirPresentacion = (id) =>
  axiosInstance.post(`/presentaciones/${id}/share`).then((res) => res.data);

/**
 * GET /presentaciones/plantillas - Catálogo de plantillas disponibles
 */
export const obtenerPlantillas = () =>
  axiosInstance.get('/presentaciones/plantillas').then((res) => res.data);

/**
 * GET /presentaciones/fuentes - Catálogo de tipografías disponibles
 */
export const obtenerFuentes = () =>
  axiosInstance.get('/presentaciones/fuentes').then((res) => res.data);

/**
 * GET /presentaciones/temas - Catálogo de temas predefinidos
 */
export const obtenerTemas = () =>
  axiosInstance.get('/presentaciones/temas').then((res) => res.data);

/**
 * POST /presentaciones/temas/:key/export - Genera PPTX de un tema sugerido
 * @param {string} topicKey
 * @param {Object} overrides
 */
export const exportarTema = (topicKey, overrides = {}) =>
  axiosInstance.post(`/presentaciones/temas/${topicKey}/export`, overrides, {
    responseType: 'blob',
    headers: {
      'Content-Type': 'application/json',
    },
  });

// =======================
// 🔹 ADMIN - Usuarios
// =======================

/**
 * GET /admin/usuarios/catalogos - Catálogos de roles y estados (solo admin)
 */
export const obtenerCatalogosUsuariosAdmin = () =>
  axiosInstance.get('/admin/usuarios/catalogos').then((res) => res.data);

/**
 * GET /admin/usuarios - Obtener lista de usuarios (solo admin)
 * @param {Object} params
 */
export const obtenerUsuariosAdmin = (params = {}) =>
  axiosInstance.get('/admin/usuarios', { params }).then((res) => res.data);

/**
 * GET /admin/usuarios/:id - Obtener detalle extendido de un usuario (solo admin)
 * @param {number|string} id
 */
export const obtenerUsuarioDetalleAdmin = (id) =>
  axiosInstance.get(`/admin/usuarios/${id}`).then((res) => res.data);

/**
 * GET /admin/usuarios/:id/presentaciones - Historial de presentaciones del usuario
 * @param {number|string} id
 * @param {Object} params
 */
export const obtenerPresentacionesUsuarioAdmin = (id, params = {}) =>
  axiosInstance.get(`/admin/usuarios/${id}/presentaciones`, { params }).then((res) => res.data);

/**
 * PATCH /admin/usuarios/:id/rol - Actualizar rol de un usuario
 * @param {number|string} id
 * @param {string} rol
 */
export const actualizarRolUsuarioAdmin = (id, rol) =>
  axiosInstance.patch(`/admin/usuarios/${id}/rol`, { rol }).then((res) => res.data);

/**
 * PATCH /admin/usuarios/:id/estado - Actualizar estado de un usuario
 * @param {number|string} id
 * @param {string} estado
 */
export const actualizarEstadoUsuarioAdmin = (id, estado) =>
  axiosInstance.patch(`/admin/usuarios/${id}/estado`, { estado }).then((res) => res.data);

/**
 * DELETE /admin/usuarios/:id - Eliminar un usuario (solo admin)
 * @param {number|string} id
 */
export const eliminarUsuarioAdmin = (id) =>
  axiosInstance.delete(`/admin/usuarios/${id}`).then((res) => res.data);

// =======================
// 🔹 LOGIN con Google
// =======================

/**
 * Inicia flujo de autenticación con Google
 */
export const iniciarSesionConGoogle = () => {
  try {
    // 🔍 DEBUG: Verificar variables de entorno
    console.log('🔍 DEBUG process.env.REACT_APP_API_URL:', process.env.REACT_APP_API_URL);
    console.log('🔍 DEBUG API_BASE_URL:', API_BASE_URL);
    
    // ✅ Detecta automáticamente si estás en local o producción
    const currentOrigin = window.location.origin;
    
    // ✅ Asegurar que no haya barras dobles en la URL de redirect
    const redirectUrl = `${currentOrigin}/oauth-success`;
    const cleanRedirectUrl = redirectUrl.replace(/([^:]\/)\/+/g, '$1'); // Eliminar barras dobles
    
    // ✅ Limpiar API_BASE_URL de barras finales
    const cleanApiUrl = API_BASE_URL.replace(/\/+$/, '');
    
    // 🔍 Construir URL paso a paso para debug
    const fullUrl = `${cleanApiUrl}/auth/google?redirect=${encodeURIComponent(cleanRedirectUrl)}`;
    
    console.log('🚀 Iniciando OAuth con redirect:', cleanRedirectUrl);
    console.log('🌐 Backend URL limpia:', cleanApiUrl);
    console.log('🔗 URL completa:', fullUrl);
    
    // ✅ Verificar que no haya doble slash
    if (fullUrl.includes('//auth/') || cleanRedirectUrl.includes('//oauth-success')) {
      console.error('❌ DETECTADO DOBLE SLASH! URL problemática:', fullUrl);
      console.error('❌ Redirect URL:', cleanRedirectUrl);
      alert('Error en configuración de URL. Revisa la consola.');
      return;
    }
    
    // ✅ Envía al backend la URL correcta de callback
    window.location.href = fullUrl;
  } catch (error) {
    console.error('❌ Error iniciando sesión con Google:', error);
    alert('Error al iniciar sesión. Por favor intenta de nuevo.');
  }
};

// =======================
// 🔹 PERFIL
// =======================

/**
 * GET /perfil - Obtener datos del perfil
 */
export const obtenerPerfil = () =>
  axiosInstance.get('/perfil');

// =======================
// 🔹 Cerrar sesión
// =======================

/**
 * Borra el token y redirige al inicio
 */
export const cerrarSesion = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('usuario');
  window.location.href = '/';
};

// =======================
// 🔹 SOPORTE - REPORTES
// =======================

/**
 * GET /reportes/categorias - Catálogo de categorías disponibles para los reportes
 */
export const obtenerCategoriasReportes = () =>
  axiosInstance.get('/reportes/categorias').then((res) => res.data);

/**
 * GET /reportes/estados - Catálogo de estados disponibles para los reportes (admin/soporte)
 */
export const obtenerEstadosReportes = () =>
  axiosInstance.get('/reportes/estados').then((res) => res.data);

/**
 * POST /reportes - Crear un nuevo reporte de soporte
 * @param {Object} data
 */
export const crearReporteSoporte = (data) =>
  axiosInstance.post('/reportes', data).then((res) => res.data);

/**
 * GET /soporte/reportes - Listado de reportes (admin/soporte)
 * @param {Object} params
 */
export const obtenerReportesSoporte = (params = {}) =>
  axiosInstance.get('/soporte/reportes', { params });

/**
 * PATCH /soporte/reportes/:id - Actualiza el estado de un reporte (admin/soporte)
 * @param {number|string} id
 * @param {string} estado
 */
export const actualizarEstadoReporte = (id, estado) =>
  axiosInstance.patch(`/soporte/reportes/${id}`, { estado }).then((res) => res.data);

/**
 * DELETE /soporte/reportes/:id - Elimina un reporte de soporte (admin)
 * @param {number|string} id
 */
export const eliminarReporteSoporte = (id, params = {}) =>
  axiosInstance.delete(`/soporte/reportes/${id}`, { params }).then((res) => res.data);

export const obtenerComentariosReporteSoporte = (id, params = {}) =>
  axiosInstance.get(`/soporte/reportes/${id}/comentarios`, { params }).then((res) => res.data);

export const crearComentarioReporteSoporte = (id, payload) =>
  axiosInstance.post(`/soporte/reportes/${id}/comentarios`, payload).then((res) => res.data);

/**
 * GET /admin/dashboard/resumen - Resumen general del panel admin
 */
export const obtenerDashboardResumen = () =>
  axiosInstance.get('/admin/dashboard/resumen').then((res) => res.data);

// =======================
// 🔹 SOPORTE - MODO MANTENIMIENTO
// =======================

/**
 * GET /soporte/mantenimiento - Obtener estado actual del modo mantenimiento
 */
export const obtenerEstadoMantenimientoSoporte = () =>
  axiosInstance.get('/soporte/mantenimiento').then((res) => res.data);

/**
 * PATCH /soporte/mantenimiento - Actualizar estado del modo mantenimiento
 * @param {{activo: boolean, mensaje?: string}} data
 */
export const actualizarEstadoMantenimientoSoporte = (data) =>
  axiosInstance.patch('/soporte/mantenimiento', data).then((res) => res.data);

// =======================
// 🔹 SOPORTE - USUARIOS (Solo lectura)
// =======================

/**
 * GET /soporte/usuarios - Obtener lista de usuarios visible para soporte
 * @param {Object} params
 */
export const obtenerUsuariosSoporte = (params = {}) =>
  axiosInstance.get('/soporte/usuarios', { params }).then((res) => res.data);

/**
 * GET /soporte/usuarios/:email - Obtener detalle de un usuario por email
 * @param {string} email
 */
export const obtenerUsuarioSoportePorEmail = (email) =>
  axiosInstance.get(`/soporte/usuarios/${encodeURIComponent(email)}`).then((res) => res.data);

/**
 * GET /soporte/usuarios/:id/presentaciones - Historial visible para soporte
 * @param {number|string} id
 * @param {Object} params
 */
export const obtenerPresentacionesUsuarioSoporte = (id, params = {}) =>
  axiosInstance.get(`/soporte/usuarios/${id}/presentaciones`, { params }).then((res) => res.data);

// =======================
// 🔹 SOPORTE - REPORTES (Extras)
// =======================

/**
 * GET /soporte/reportes/metricas - Obtener métricas agregadas de reportes
 */
export const obtenerMetricasReportesSoporte = () =>
  axiosInstance.get('/soporte/reportes/metricas').then((res) => res.data);

/**
 * GET /soporte/reportes/exportar - Exportar reportes en CSV
 */
export const exportarReportesSoporte = (params = {}, opciones = {}) => {
  const config = {
    params,
    ...opciones,
  };

  // Si el consumidor solicita un archivo directo, aseguramos el encabezado adecuado
  if (config.responseType === 'blob') {
    config.headers = {
      Accept: 'text/csv',
      ...(config.headers || {}),
    };
  }

  return axiosInstance.get('/soporte/reportes/exportar', config).then((res) => res.data);
};

// =======================
// 🔹 SOPORTE - HISTORIAL
// =======================

export const obtenerHistorialMantenimientoSoporte = (params = {}) =>
  axiosInstance.get('/soporte/historial/mantenimientos', { params }).then((res) => res.data);

export const obtenerHistorialReportesSoporte = (params = {}) =>
  axiosInstance.get('/soporte/historial/reportes', { params }).then((res) => res.data);

// =======================
// 🔹 SOPORTE - LOGS
// =======================

export const obtenerLogsSoporte = (params = {}) =>
  axiosInstance.get('/soporte/logs', { params }).then((res) => res.data);

export const crearLogSoporte = (payload) =>
  axiosInstance.post('/soporte/logs', payload).then((res) => res.data);

// =======================
// 🔹 SOPORTE - NOTIFICACIONES
// =======================

export const obtenerNotificacionesSoporte = (params = {}) =>
  axiosInstance.get('/soporte/notificaciones', { params }).then((res) => res.data);

export const marcarNotificacionSoporteLeida = (id) =>
  axiosInstance.patch(`/soporte/notificaciones/${id}/leido`).then((res) => res.data);

export const crearNotificacionSoporte = (payload) =>
  axiosInstance.post('/soporte/notificaciones', payload).then((res) => res.data);
