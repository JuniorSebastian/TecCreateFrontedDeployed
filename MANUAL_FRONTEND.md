# Manual de Usuario – Frontend TecCreate

Este documento explica cómo interactuar con la interfaz web de TecCreate desde la perspectiva funcional (usuario, soporte y administrador). Sigue la misma estructura del manual backend, enlazando cada acción visible en pantalla con las páginas y componentes React correspondientes y con los endpoints del API que consumen. No se incluyen secretos ni URLs privadas: reemplaza dominios y credenciales por los de tu entorno de despliegue.

---

## 1. Roles y flujo general de acceso

- **Visitante:** Ve la landing, catálogos públicos (plantillas, temas, fuentes) y formulario de contacto.
- **Usuario autenticado:** Accede al dashboard, crea/edita presentaciones y administra su perfil.
- **Soporte:** Además de lo anterior, gestiona reportes y el modo mantenimiento.
- **Admin (profesor/coordinador):** Tiene todos los privilegios, incluido el panel de usuarios/admin y métricas.

Autenticación:

1. El botón *"Comenzar"* (`src/components/Header.jsx`) o *"Continuar con Google"* en `src/pages/LoginPage.jsx` inicia `iniciarSesionConGoogle()` (`src/services/api.js`) que redirige a `GET /auth/google`.
2. Tras el retorno a `/oauth-success`, el frontend recibe `token` y datos del usuario, los guarda en `localStorage` (`AuthContext.jsx`) y configura el header `Authorization: Bearer <token>` para todas las llamadas.

Controles de acceso:

- Rutas protegidas usan `ProtectedRoute`, `RoleGuard` y `StateGuard` (`src/guards/RouteGuards.jsx`).
- Si falta token → redirección a `/login`.
- Si estado = `suspendido` → `/cuenta-suspendida`.
- Rutas públicas (landing, plantillas, temas, contacto) se sirven sin token.

---

## 2. Configuración del entorno (local y despliegue)

Variables clave (configuradas en `.env` local y como Environment Variables en Vercel):

```env
REACT_APP_API_URL=https://<tu-backend>
```

- El frontend nunca expone puertos fijos en producción; Vercel sirve archivos estáticos del build.
- `AuthContext.jsx` y `api.js` toman `REACT_APP_API_URL` para todas las peticiones.
- Las credenciales Google OAuth y claves IA viven en el backend; el frontend solo propaga el token recibido.

Instalación local:

```bash
npm install
npm start # abre http://localhost:3000
```

Despliegue (Vercel):

- Archivo `vercel.json` usa `@vercel/static-build` con `npm run build` y reescritura SPA a `index.html`.
- Tras cada push a `main`, Vercel reconstruye si el repo está conectado.

---

## 3. Funcionalidad 1 – Panel Administrador (moderación y métricas)

UI relevante (`/admindashboard`): `src/pages/AdminDashboard.jsx`, componentes compartidos en `src/components/admin/`.

### Acciones desde el frontend

| Acción en UI | Componente | Endpoint | Descripción |
|--------------|------------|----------|-------------|
| Ver tarjetas con métricas | `AdminDashboard.jsx` | `GET /admin/dashboard/resumen` | Carga estadísticas generales (usuarios, reportes, presentaciones). |
| Listar usuarios | `AdminDashboard.jsx` + tablas auxiliares | `GET /admin/usuarios` | Tabla con filtros por estado/rol. |
| Ver detalle de usuario | Modal/detail dentro de admin | `GET /admin/usuarios/:id` y `GET /admin/usuarios/:id/presentaciones` | Muestra historial y presentaciones creadas. |
| Cambiar rol | Acción de botones/menus | `PATCH /admin/usuarios/:id/rol` | Edita `rol` (admin, soporte, usuario). |
| Cambiar estado | Acción similar | `PATCH /admin/usuarios/:id/estado` | Actualiza `estado` (activo, inactivo, suspendido). |

Notas UX:

- Cambios exitosos muestran toasts desde `useDashboardNotifications` (hooks)
- Errores 403/401 se manejan globalmente en `api.js` → redirecciones según rol/estado.

---

## 4. Funcionalidad 2 – Creación y edición de presentaciones

Pantallas: `/dashboard`, `/crear`, `/crear-presentacion`, `/editor/:id`. Componentes clave en `src/pages/CrearPresentacion.jsx`, `src/components/NuevaPresentacion.jsx`, `src/pages/Editor.jsx`.

### Flujo típico de usuario

1. **Acceder al tablero:** `/dashboard` (`Home.jsx`) lista sus presentaciones vía `GET /presentaciones/mias`.
2. **Generar borrador con IA:** botón *"Generar con IA"* usa `POST /presentaciones/generar` (llamado desde `crearPresentacionConIA()` en `api.js`).
3. **Crear manualmente:** formulario de `CrearPresentacion.jsx` envía `POST /presentaciones` con título, slides, plantilla, fuente.
4. **Editar:** `Editor.jsx` permite modificar contenido slide a slide y guarda con `PUT /presentaciones/:id` (auto-save o botones).
5. **Gestionar estado:** opciones de duplicar, borrar (`DELETE /presentaciones/:id`) y compartir (`POST /presentaciones/:id/share`).

### Controles adicionales

- Guardados muestran spinner y mensajes de éxito/fracaso.
- Usuarios inactivos ven mensajes informativos (capturados en interceptores de `api.js`).
- Las plantillas/temas/fuentes disponibles provienen de endpoints `GET /presentaciones/plantillas`, `GET /presentaciones/temas`, `GET /presentaciones/fuentes` cargados en `src/pages/Plantillas.jsx`, `Temas.jsx`, `Fuentes.jsx`.

---

## 5. Funcionalidad 3 – Descarga y compartición PPTX

UI: botones *"Descargar"* y *"Compartir"* en `Editor.jsx`, `PresentacionesPage.jsx` y `PresentacionCard.jsx`.

| Acción | Endpoint | Resultado en la UI |
|--------|----------|--------------------|
| Descargar PPTX | `GET /presentaciones/:id/export` | Descarga archivo `.pptx`. El frontend convierte la response Blob en descarga (utilidad `descargarArchivo` en `utils/`). |
| Exportar tras generación IA | `POST /presentaciones/generar/export` | Permite guardar y descargar en un paso; mensajes en modales confirmatorios. |
| Compartir | `POST /presentaciones/:id/share` | Abre modal con `shareUrl` y QR (renderizado en `CompartirModal.jsx`). |

Si `GEMINI` o `GROQ` no están configurados, el frontend muestra alertas contextuales (modales) basadas en respuesta 503.

---

## 6. Funcionalidad 4 – Reportes de soporte y modo mantenimiento

Pantallas: `/contacto` (público), `/soporte` (rol soporte/admin), `/mantenimiento` (visualización). Componentes: `src/pages/Contactanos.jsx`, `src/pages/Soporte.jsx`, `src/pages/Mantenimiento.jsx`.

### Flujo visitante / usuario suspendido

- Formulario de contacto (`Contactanos.jsx`) llama `POST /reportes` incluso sin token (se registra como anónimo).
- Si el backend devuelve 403 por suspensión, el interceptor en `api.js` evita redirigir cuando la ruta es `/contacto` (usuario puede reportar).

### Flujo rol soporte/admin

| Sección en `/soporte` | Endpoint | Notas |
|-----------------------|----------|-------|
| Dashboard de reportes | `GET /soporte/reportes` con filtros | Tabla paginada con estados/categorías. |
| Cambiar estado / asignar | `PATCH /soporte/reportes/:id` | Botones y selects dinámicos. |
| Eliminar reporte | `DELETE /soporte/reportes/:id` (solo admin) | Botón con confirmación. |
| Conversaciones/comentarios | `GET /soporte/reportes/:id/comentarios` y `POST .../comentarios` | Panel lateral para seguimiento. |
| Modo mantenimiento | `GET /soporte/mantenimiento` y `PATCH /soporte/mantenimiento` | Switch activa/desactiva. |
| Historial | `GET /soporte/historial/*` | Vistas tabulares en pestañas secundarias. |

Página `/mantenimiento` se muestra a usuarios cuando el backend activa el modo: lee parámetros `mensaje` y ofrece botón para reintentar (`GET /soporte/mantenimiento`).

---

## 7. Interfaz pública (landing y catálogos)

- **Landing (`/`):** `src/pages/LandingPage.jsx` combina `Hero`, `Features`, `Testimonials`, `Contact` y CTA hacia `/login`.
- **Plantillas (`/plantillas`), Temas (`/temas`), Fuentes (`/fuentes`):** Visualizaciones estáticas con datos del backend (`api.js` → `GET /presentaciones/plantillas|temas|fuentes`).
- **Cuenta suspendida (`/cuenta-suspendida`)** y **Éxito OAuth (`/oauth-success`)** muestran mensajes personalizados según estado del token.

---

## 8. Manejo de errores y estados globales

- `src/services/api.js` contiene interceptores Axios:
  - 401 → limpieza de token y redirect a `/login`.
  - 403 con mensajes "suspendida" → redirige a `/cuenta-suspendida` (salvo en `/contacto`).
  - 403 por permisos → redirige al dashboard según rol (`/admindashboard`, `/soporte`, `/perfil`).
- `LoadingScreen.jsx` se utiliza durante transiciones críticas (ej. al abrir sesión).
- `state/auth/` y `context/AuthContext.jsx` centralizan usuario/rol.

Notificación visual:

- Toasters/snackbars (basados en `useState` locales y componentes `Alert`) informan resultados de guardado, exportación y errores.
- Animaciones Tailwind + Framer Motion mejoran feedback (clases en `tailwind.config.js`).

---

## 9. Recomendaciones de operación

- **Variables de entorno:** mantén `.env` fuera del repo; se usa `.env.example` de referencia.
- **Sesiones:** el token se guarda en `localStorage`; ante cambios de rol/estado, limpiar manualmente o cerrar sesión desde el menú.
- **Debug:** habilita la consola con `npm start` en local; interceptores registran mensajes detallados ante errores comunes (CORS, suspensión, permisos).
- **Accesibilidad:** la mayoría de botones poseen `aria-label` o textos descriptivos; cuando añadas nuevas vistas, sigue esta convención.
- **Testing:** `npm test` ejecuta suites basadas en Testing Library; para nuevas funcionalidades de UI crítica, añade pruebas en `src/__tests__/`.

---

## 10. Tabla resumen de rutas frontend ↔ backend

| Ruta Frontend | Componente | Acción principal | Endpoint backend |
|---------------|------------|------------------|------------------|
| `/login` | `LoginPage.jsx` | Login Google | `GET /auth/google` (redirige) |
| `/dashboard` | `Home.jsx` | Listar presentaciones | `GET /presentaciones/mias` |
| `/crear` | `Crear.jsx` + `NuevaPresentacion.jsx` | Wizard inicial | `POST /presentaciones` |
| `/crear-presentacion` | `CrearPresentacion.jsx` | Generador IA / manual | `POST /presentaciones/generar`, `POST /presentaciones` |
| `/presentacion/:id` | `Editor.jsx` | Editar/descargar | `PUT /presentaciones/:id`, `GET /presentaciones/:id/export` |
| `/admindashboard` | `AdminDashboard.jsx` | Gestión usuarios | `GET/PATCH /admin/usuarios/*`, `GET /admin/dashboard/resumen` |
| `/soporte` | `Soporte.jsx` | Reportes y mantenimiento | `GET/POST/PATCH/DELETE /reportes`, `GET/PATCH /soporte/mantenimiento` |
| `/contacto` | `Contactanos.jsx` | Enviar reporte público | `POST /reportes` |
| `/perfil` | `Perfil.jsx` | Datos propios | `GET /perfil`, `PATCH /perfil` (si habilitado) |

---

## 11. Glosario rápido de componentes reutilizables

- `AuthContext.jsx`: obtiene user info desde `localStorage`, expone `login`, `logout` y estado `isAuthenticated`.
- `RouteGuards.jsx`: wrappers para proteger rutas según rol/estado (`ProtectedRoute`, `RoleGuard`, `StateGuard`, `PublicRoute`).
- `GoogleLoginButton.jsx`: botón estilizado que llama a `iniciarSesionConGoogle`.
- `LayoutConNavbar.jsx`: layout principal con `Navbar` y `SidebarLink` para secciones privadas.
- `LoadingScreen.jsx`: pantalla de carga reutilizada tras autenticación.
- `services/api.js`: capa central de peticiones HTTP al backend.

---

### Próximos pasos sugeridos

1. Configura `REACT_APP_API_URL` en Vercel (Producción) y Vercel Preview (si usas entornos previos).
2. Verifica que las rutas `/admindashboard`, `/soporte` y `/dashboard` respondan según el rol del usuario.
3. Documenta nuevas funcionalidades replicando el esquema de este manual: describe pantalla → componente → endpoint → permisos.
4. Mantén sincronizados manuales de frontend y backend para que los equipos académicos dispongan del mismo lenguaje funcional.
