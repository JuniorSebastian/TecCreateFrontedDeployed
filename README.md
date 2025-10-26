# TecCreate Frontend

Aplicación React para crear y gestionar presentaciones asistidas por IA. Este README reúne todo lo necesario para instalar, configurar, desplegar y mantener el frontend con el mismo nivel de detalle que el backend ya documentado.

## Índice

- [Descripción general](#descripción-general)
- [Características clave](#características-clave)
- [Requisitos previos](#requisitos-previos)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Variables de entorno](#variables-de-entorno)
- [Instalación y ejecución local](#instalación-y-ejecución-local)
- [Servicios externos y dependencias del backend](#servicios-externos-y-dependencias-del-backend)
- [Build y despliegue](#build-y-despliegue)
  - [Vercel (SPA estática)](#vercel-spa-estática)
  - [Servidor privado / institucional](#servidor-privado--institucional)
  - [Otras opciones de hosting estático](#otras-opciones-de-hosting-estático)
- [Mantenimiento y buenas prácticas](#mantenimiento-y-buenas-prácticas)
- [Solución de problemas y verificación](#solución-de-problemas-y-verificación)
- [Documentación complementaria](#documentación-complementaria)
- [Notas de seguridad](#notas-de-seguridad)
- [Workflow recomendado para subir cambios](#workflow-recomendado-para-subir-cambios)

---

## Descripción general

- **Objetivo:** entregar una interfaz moderna y accesible para crear presentaciones con asistencia de IA, gestionar usuarios, atender reportes y compartir resultados.
- **Stack principal:** React 19, React Router 7, @tanstack/react-query, Tailwind CSS, Axios y Create React App (CRA) con `react-scripts` 5.
- **Arquitectura:** SPA (Single Page Application) que consume el backend de TecCreate vía API REST autenticada con JWT. Utiliza localStorage para persistir token y datos de sesión.
- **Estrategia de UI:** componentes propios en `src/components`, páginas en `src/pages`, hooks especializados y contextos (`AuthContext`) para el estado global.
- **Estilo y animaciones:** Tailwind CSS + configuraciones personalizadas en `tailwind.config.js` para animaciones y efectos.

---

## Características clave

- Inicio de sesión con Google OAuth (token emitido por el backend y almacenado en el navegador).
- Dashboard con tarjetas, buscador y tabla de presentaciones del usuario.
- Creación manual y asistida por IA de presentaciones, incluyendo editor slide a slide.
- Exportación a PPTX, duplicado, eliminación y enlaces de compartición con código QR.
- Módulo de soporte para reportes, historial, logs y activación de modo mantenimiento.
- Panel administrativo con métricas, gestión de roles y estados de usuarios.
- Rutas protegidas por rol mediante guardas (`RouteGuards.jsx`).
- Interceptores Axios que centralizan manejo de errores, suspensión, permisos y estados especiales.

---

## Requisitos previos

| Componente | Versión recomendada | Notas |
|------------|---------------------|-------|
| Node.js | 20.11.1 LTS | Probado también con Node 18.19. Se recomienda mantener LTS activa para compatibilidad con React 19 y CRA. |
| npm | 10.5+ | Instalada junto a Node. Ejecuta `npm --version` para confirmarla. |
| npx | 10+ | Incluido con npm; necesario para ejecutar scripts auxiliares. |
| Navegador | Chrome/Edge/Firefox recientes | Necesario para desarrollo y pruebas. |

Antes de instalar, valida versiones:

```powershell
node --version
npm --version
```

> Si trabajas en Windows, puedes usar `setup-local.ps1` para verificar Node y generar `.env` base automáticamente.

---

## Estructura de carpetas

```
frontend/
├─ public/                 # index.html, manifest y assets públicos
├─ scripts/
│  └─ verificar-backend.js # Comprueba disponibilidad del backend antes de iniciar
├─ src/
│  ├─ components/          # Componentes reutilizables (Hero, Navbar, admin, etc.)
│  ├─ context/             # AuthContext y proveedores derivados
│  ├─ data/                # Datos estáticos o catálogos auxiliares
│  ├─ hooks/               # Hooks agrupados por dominio (auth, dashboard, soporte)
│  ├─ pages/               # Páginas de la SPA (Dashboard, Crear, Soporte, etc.)
│  ├─ routes/              # Definiciones de rutas y guardas
│  ├─ services/            # Axios y clientes HTTP centralizados
│  ├─ state/               # Slices de estado locales si se requiere segmentación
│  ├─ stores/              # Almacenes derivados (si se escala a Zustand u otros)
│  ├─ styles/              # Estilos globales y Tailwind entrypoint
│  ├─ utils/               # Utilidades de formato, descargas, helpers de UI
│  ├─ App.js / App.css     # Root component y estilos asociados
│  └─ index.js             # Entry point: ReactDOM + QueryClientProvider
├─ tailwind.config.js      # Configuración de Tailwind, animaciones y utilidades
├─ .env.example            # Plantilla de variables de entorno (sin secretos)
├─ setup-local.(bat|ps1)   # Scripts para preparar entorno en Windows
├─ vercel.json             # Configuración para despliegue en Vercel (SPA + rewrites)
└─ package.json            # Dependencias, scripts y metadata del proyecto
```

> Directorios como `components/admin`, `components/ui`, `pages/Soporte`, etc., amplían la organización por dominio. Revisa cada subcarpeta para entender responsabilidades específicas.

---

## Variables de entorno

Define estas variables en `.env` (local) o en tu plataforma de despliegue. Nunca subas valores reales al repositorio.

```
REACT_APP_API_URL=https://<tu-backend>
PORT=3000
```

- `REACT_APP_API_URL`: URL base del backend (puede ser `http://localhost:3001` en desarrollo). Debe incluir protocolo (`http` o `https`).
- `PORT` (opcional): CRA usa 3000 por defecto. Modifícalo si el puerto está ocupado.

Cómo obtener los valores:

- **Backend institucional**: utiliza la misma URL pública configurada en el README del backend (`PUBLIC_BASE_URL`).
- **Desarrollo local**: apunta a `http://localhost:3001` si sigues la guía del backend.
- **Vercel/hosting estático**: crea la variable en la interfaz del proveedor. Vercel → Settings → Environment Variables → `REACT_APP_API_URL`.

Para generar `.env` rápidamente en Windows, ejecuta:

```powershell
./setup-local.ps1
```

Este script también comprueba que Node esté instalado.

---

## Instalación y ejecución local

1. **Clonar repositorio y ubicarse en el frontend**
	```powershell
	git clone https://github.com/<tu-organizacion>/TecCreateFrontedDeployed.git
	cd TecCreateFrontedDeployed/frontend
	```

2. **Instalar dependencias**
	```powershell
	npm install
	```

3. **Configurar variables**
	- Copia `.env.example` a `.env` y ajusta `REACT_APP_API_URL`.
	- Asegúrate de que el backend esté levantado y accesible en esa URL.

4. **Verificar backend desde el frontend** (opcional)
	```powershell
	npm run verificar-backend
	```

5. **Iniciar la aplicación en modo desarrollo**
	```powershell
	npm start
	```
	Navega a `http://localhost:3000`. CRA recargará automáticamente al detectar cambios.

6. **Ejecución de pruebas**
	```powershell
	npm test
	```

7. **Build de producción local**
	```powershell
	npm run build
	```
	Usa `npx serve -s build` para previsualizar la versión compilada.

---

## Servicios externos y dependencias del backend

- **Autenticación**: flujo Google OAuth gestionado por el backend (`/auth/google`). El frontend redirige usando `iniciarSesionConGoogle` en `src/services/api.js`.
- **API protegida**: todas las solicitudes pasan por `axiosInstance` con interceptores que adjuntan el JWT desde `localStorage`.
- **IA y PPTX**: el frontend sólo invoca endpoints (`/presentaciones/generar`, `/presentaciones/:id/export`, etc.). Las claves Groq/Gemini se administran en el backend.
- **Reportes/soporte**: módulos en `pages/Soporte` consumen `/soporte/*` y `/reportes/*`.
- **Métricas admin**: `AdminDashboard` consulta `/admin/dashboard/resumen` y rutas de usuarios.

> El frontend no almacena secretos. Cualquier integración de terceros (analíticas, chat, etc.) debe exponerse como `REACT_APP_*` y documentarse antes de usarse.

---

## Build y despliegue

### Vercel (SPA estática)

1. **Configuración del proyecto**
	- Framework preset: *Create React App*.
	- Build Command: `npm run build`.
	- Output Directory: `build`.
	- Installs: automáticas (`npm install`). Considera fijar `NODE_VERSION=20.11.1`.

2. **Variables de entorno en Vercel**
	- `REACT_APP_API_URL`: URL pública del backend (Render, on-premise, etc.).
	- (Opcional) `NODE_VERSION`: asegura versión consistente.

3. **Rewrites SPA**
	- `vercel.json` incluye:
	  ```json
	  {
		 "routes": [
			{ "handle": "filesystem" },
			{ "src": "/.*", "dest": "/index.html" }
		 ]
	  }
	  ```

4. **Deploy automático**
	- Conecta la rama `main` en Vercel.
	- Cada push ejecuta el build y publica preview/producción.

5. **Post-deploy**
	- Verifica conexión al backend (`/healthz`).
	- Ajusta dominio personalizado si aplica y actualiza `CLIENT_URL` en el backend.

### Servidor privado / institucional

1. **Generar build**
	```powershell
	npm run build
	```

2. **Copiar archivos compilados**
	```powershell
	scp -r build/* admin@servidor:/var/www/teccreate-frontend/
	```

3. **Configurar servidor web (Nginx ejemplo)**
	```nginx
	server {
	  listen 80;
	  server_name frontend.tec-instituto.edu;

	  root /var/www/teccreate-frontend;
	  index index.html;

	  location / {
		 try_files $uri /index.html;
	  }

	  location /healthz {
		 add_header Content-Type application/json;
		 return 200 '{"status":"ok"}';
	  }
	}
	```

4. **HTTPS y cache**
	- Habilita TLS (Let’s Encrypt o certificados institucionales).
	- Cachea `*.js`, `*.css`, `*.png` y mantén `index.html` con `no-cache`.

5. **Integración con backend**
	- Asegura que `REACT_APP_API_URL` apunte al backend definitivo antes de compilar.
	- Ajusta CORS en el backend para incluir el nuevo dominio.

6. **Automatización**
	- Usa CI (GitHub Actions, Jenkins) para ejecutar `npm ci && npm run build` y desplegar los artefactos.

### Otras opciones de hosting estático

- **Render Static**: `npm ci && npm run build`; folder `build`.
- **Netlify**: build `npm run build`, publish `build`, agrega `_redirects` con `/* /index.html 200`.
- **GitHub Pages**: usar `gh-pages` (no recomendado para apps con autenticación sensible).
- **S3 + CloudFront**: subir `build/` y configurar error documents a `index.html`.

---

## Mantenimiento y buenas prácticas

- **Dependencias**: ejecuta `npm outdated` periódicamente. Revisa compatibilidad antes de actualizar React 19/React Query.
- **Lint/format**: CRA integra ESLint. Puedes añadir `npm run lint` con `eslint .` si deseas reglas adicionales.
- **Testing**: amplía cobertura con Testing Library. Ejecuta `npm test -- --watchAll=false` en CI.
- **Accesibilidad**: usa Lighthouse y revisa atributos `aria-*` en componentes interactivos.
- **Tailwind**: mantén `content` actualizado para evitar clases huérfanas. Limpia utilidades no usadas en cada release.
- **Documentación**: sincroniza cambios relevantes con `MANUAL_FRONTEND.md` y notas en `CONFIGURACION_COMPLETADA.md`.
- **Versionado**: si liberan releases formales, añade un `CHANGELOG.md` coordinado con backend.

---

## Solución de problemas y verificación

| Problema | Causa probable | Solución |
|----------|----------------|----------|
| Pantalla en blanco tras login | `REACT_APP_API_URL` incorrecta o backend inaccesible | Valida `.env`, ejecuta `npm run verificar-backend`, revisa consola (CORS/403/500). |
| CRA cambia de puerto | Puerto 3000 ocupado | Define `PORT=<nuevo>` en `.env` o acepta el puerto sugerido. |
| Errores 403 constantes | Rol sin permisos o cuenta suspendida | Revisa interceptores en `src/services/api.js` y confirma estado del usuario en backend. |
| `npm run build` falla | Warnings de ESLint tratados como errores | Corrige importaciones no usadas, variables sin utilizar y dependencias de hooks. |
| Rutas 404 tras deploy estático | Falta rewrite SPA | Configura `try_files` (Nginx) o `_redirects`/`vercel.json` según hosting. |
| Descarga PPTX no inicia | Navegador bloquea popups/blob | Permite descargas y revisa `exportarPresentacion` en `services/api.js`. |

Checks rápidos:

- `npm run build` sin warnings.
- `npm test -- --watchAll=false` para validar componentes.
- `fetch('<REACT_APP_API_URL>/healthz')` desde consola del navegador.
- Lighthouse (Performance + Accessibility > 90). 

---

## Documentación complementaria

- `MANUAL_FRONTEND.md`: manual para usuarios no técnicos.
- `README_LOCAL.md`: pasos abreviados para entornos de laboratorio.
- `RBAC_IMPLEMENTATION.md`: detalles de roles, permisos y guardas de navegación.
- `REPORTES_AUTENTICADOS.md`, `REPORTES_HIBRIDO.md`, `SUSPENSION_SYSTEM.md`: flujos específicos de soporte y cuentas.
- `CONFIGURACION_COMPLETADA.md`: bitácora de tareas realizadas en el proyecto.
- README del backend: obligatorio para entender rutas, OAuth y dependencias compartidas.

---

## Notas de seguridad

- No subas `.env` ni valores reales de `REACT_APP_API_URL` al repositorio.
- Fuerza HTTPS en producción para proteger tokens y peticiones.
- Limpia `localStorage` al cerrar sesión (`cerrarSesion` ya lo hace); revisa caducidad del JWT en el backend.
- Revisa dependencias con `npm audit`. Aplica parches críticos inmediatamente.
- En despliegues institucionales, restringe el dominio del frontend en el backend (`ALLOWED_ORIGINS`).

---

## Workflow recomendado para subir cambios

1. Crear rama:
	```powershell
	git checkout -b docs/frontend-readme
	```

2. Guardar modificaciones y revisar estado:
	```powershell
	git add README.md
	git status
	```

3. Validar antes del commit (opcional, recomendado):
	```powershell
	npm run build
	npm test -- --watchAll=false
	```

4. Registrar commit descriptivo:
	```powershell
	git commit -m "docs: refresh frontend deployment guide"
	```

5. Subir rama y crear Pull Request:
	```powershell
	git push origin docs/frontend-readme
	```

6. Tras aprobación, fusionar a `main` y monitorizar el despliegue (Vercel o servidor privado).

---

Este README brinda una guía reproducible para que cualquier profesor, programador o equipo de TI pueda desplegar TecCreate Frontend sin contratiempos. Actualízalo cuando cambien dependencias, flujos o proveedores de hosting.
