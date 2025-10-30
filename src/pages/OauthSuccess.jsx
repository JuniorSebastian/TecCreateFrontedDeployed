import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function OauthSuccess() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('🔍 OAuth Success - URL actual:', window.location.href);
    console.log('🔍 OAuth Success - pathname:', window.location.pathname);
    console.log('🔍 OAuth Success - search:', window.location.search);
    
    // ✅ Detectar si hay doble slash en la URL
    if (window.location.pathname.includes('//oauth-success')) {
      console.warn('⚠️ DETECTADO DOBLE SLASH en la URL!');
      // Redirigir a la URL correcta
      const newUrl = window.location.href.replace('//oauth-success', '/oauth-success');
      console.log('🔧 Redirigiendo a URL corregida:', newUrl);
      window.location.replace(newUrl);
      return;
    }
    
    const params = new URLSearchParams(window.location.search);
    const token = params.get('token');
    const user = params.get('user');
    const redirect = params.get('redirect'); // Nuevo: leer redirect del backend
    const estado = params.get('estado'); // Nuevo: leer estado del backend
    const errorParam = params.get('error');

    console.log('📋 Parámetros recibidos:', { 
      token: !!token, 
      user: !!user, 
      redirect, 
      estado,
      error: errorParam 
    });

    if (errorParam) {
      console.error('❌ Error OAuth:', errorParam);
      // Detectar si es error de suspensión
      if (errorParam.includes('suspendida') || errorParam.includes('suspended')) {
        setError('Tu cuenta está suspendida. Contacta con soporte.');
      } else {
        setError(`Error de autenticación: ${errorParam}`);
      }
      setTimeout(() => navigate('/'), 3000);
      return;
    }

    if (token && user) {
      try {
        const usuario = JSON.parse(decodeURIComponent(user));
        console.log('✅ Usuario procesado:', usuario);
        console.log('📸 Foto de perfil recibida:', usuario.foto);
        console.log('📋 Todos los campos del usuario:', Object.keys(usuario));
        
        // Guardar token y usuario en localStorage (compatibilidad con distintas claves)
        // Claves históricas usadas por la app: 'token' y 'usuario'
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(usuario));
        // Claves adicionales/compatibilidad con otros despliegues: 'authToken' y 'userData'
        try {
          localStorage.setItem('authToken', token);
          localStorage.setItem('userData', JSON.stringify(usuario));
        } catch (e) {
          console.warn('No se pudo guardar claves alternativas en localStorage:', e);
        }

        // Verificar estado de suspensión
        const estadoNormalizado = (estado || usuario.estado || '').toLowerCase();
        if (estadoNormalizado === 'suspendido') {
          console.warn('⚠️ Usuario suspendido detectado');
          console.log('✅ Token y usuario guardados en localStorage para permitir reportes');
          // NO eliminar token/usuario - necesarios para enviar reportes de desbaneo
          // Redirigir a página dedicada de cuenta suspendida
          navigate('/cuenta-suspendida', { replace: true });
          return;
        }

        // Determinar ruta de redirección
        let redirectPath = redirect || '/perfil'; // Usar redirect del backend o fallback
        
        // 🔧 Normalizar rutas del backend que no coincidan con el frontend
        const rutasNormalizadas = {
          '/admin': '/admindashboard',
          '/dashboard': '/admindashboard',
          '/administrador': '/admindashboard',
          // Agregar otras normalizaciones si es necesario
        };
        
        // Aplicar normalización si existe
        if (redirect && rutasNormalizadas[redirect]) {
          console.log(`🔧 Normalizando ruta: ${redirect} → ${rutasNormalizadas[redirect]}`);
          redirectPath = rutasNormalizadas[redirect];
        }
        
        // Si no hay redirect del backend, determinar según rol
        if (!redirect) {
          const rolNormalizado = (usuario.rol || '').toLowerCase();
          if (rolNormalizado === 'admin') {
            redirectPath = '/admindashboard';
          } else if (rolNormalizado === 'soporte') {
            redirectPath = '/soporte';
          } else {
            redirectPath = '/perfil';
          }
        }

        console.log(`🎯 Redirigiendo a: ${redirectPath}`);
        
        // Redirigir inmediatamente sin delay
        navigate(redirectPath, { replace: true });
      } catch (e) {
        console.error("❌ Error al procesar usuario:", e);
        setError('Error procesando datos de usuario');
        setTimeout(() => navigate('/'), 3000);
      }
    } else {
      console.warn('⚠️ Parámetros faltantes, redirigiendo a home');
      setError('Parámetros de autenticación faltantes');
      setTimeout(() => navigate('/'), 3000);
    }
  }, [navigate]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg max-w-md">
          <div className="text-red-600 text-4xl mb-4">❌</div>
          <h2 className="text-xl font-bold text-red-800 mb-2">Error de Autenticación</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <p className="text-sm text-gray-500">Redirigiendo en unos segundos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="text-center p-8 bg-white rounded-lg shadow-lg">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-bold text-gray-800 mb-2">Autenticando...</h2>
        <p className="text-gray-600">Procesando tu información y redirigiendo...</p>
      </div>
    </div>
  );
}
