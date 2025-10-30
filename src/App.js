import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Crear from './pages/Crear';
import ListaPresentaciones from './components/ListaPresentaciones';
import LayoutConNavbar from './components/LayoutConNavbar';
import LoginPage from './pages/LoginPage';
import Perfil from './pages/Perfil';
import AdminDashboard from './pages/AdminDashboard';
import CrearPresentacion from './pages/CrearPresentacion';
import Editor from './pages/Editor';
import OauthSuccess from './pages/OauthSuccess';
import Plantillas from './pages/Plantillas';
import Temas from './pages/Temas';
import Fuentes from './pages/Fuentes';
import Contactanos from './pages/Contactanos';
import Soporte from './pages/Soporte';
import CuentaSuspendida from './pages/CuentaSuspendida';
import Mantenimiento from './pages/Mantenimiento';

import { AuthProvider } from './context/AuthContext';
import { ProtectedRoute, RoleGuard, StateGuard, PublicRoute } from './guards/RouteGuards';

import './styles/index.css';

function App() {
  // Componente interno para capturar parámetros de OAuth si el backend redirige al root
  function AuthRedirectHandler() {
    const navigate = useNavigate();

    useEffect(() => {
      try {
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        const userRaw = params.get('user');
        const redirect = params.get('redirect');

        if (!token || !userRaw) return; // nada que hacer

        let user = null;
        try {
          user = JSON.parse(decodeURIComponent(userRaw));
        } catch (e) {
          try {
            user = JSON.parse(userRaw);
          } catch (err) {
            console.warn('AuthRedirectHandler: user no es JSON válido');
            return;
          }
        }

        // Guardar en localStorage (compatibilidad)
        localStorage.setItem('token', token);
        localStorage.setItem('usuario', JSON.stringify(user));
        try {
          localStorage.setItem('authToken', token);
          localStorage.setItem('userData', JSON.stringify(user));
        } catch (e) {
          console.warn('No se pudo guardar claves alternativas en localStorage:', e);
        }

        // Determinar ruta segura de redirección
        let redirectPath = redirect || '/perfil';
        const rutasNormalizadas = {
          '/admin': '/admindashboard',
          '/dashboard': '/admindashboard',
          '/administrador': '/admindashboard',
        };
        if (redirect && rutasNormalizadas[redirect]) redirectPath = rutasNormalizadas[redirect];
        if (!redirect) {
          const rolNormalizado = (user?.rol || '').toLowerCase();
          if (rolNormalizado === 'admin') redirectPath = '/admindashboard';
          else if (rolNormalizado === 'soporte') redirectPath = '/soporte';
          else redirectPath = '/perfil';
        }

        // Limpiar query params de la URL para no exponer tokens en el historial
        const basePath = window.location.pathname;
        window.history.replaceState({}, document.title, basePath);

        navigate(redirectPath, { replace: true });
      } catch (err) {
        console.error('AuthRedirectHandler error:', err);
      }
    }, [navigate]);

    return null;
  }

  return (
    <AuthProvider>
      <Router>
        {/* Handler global que procesa parámetros OAuth si vienen en la URL inicial */}
        <AuthRedirectHandler />
        <Routes>
          {/* Páginas públicas - redirigen si ya está autenticado */}
          <Route path="/" element={<PublicRoute><LandingPage /></PublicRoute>} />
          <Route path="/login" element={<PublicRoute><LoginPage /></PublicRoute>} />
          <Route path="/oauth-success" element={<OauthSuccess />} />
          <Route path="/cuenta-suspendida" element={<CuentaSuspendida />} />
          <Route path="/mantenimiento" element={<Mantenimiento />} />
          
          {/* Páginas de información pública */}
          <Route path="/plantillas" element={<Plantillas />} />
          <Route path="/temas" element={<Temas />} />
          <Route path="/fuentes" element={<Fuentes />} />
          <Route path="/contacto" element={<Contactanos />} />

          {/* Rutas protegidas por ROL */}
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute>
                <RoleGuard allowedRoles={['admin']}>
                  <AdminDashboard />
                </RoleGuard>
              </ProtectedRoute>
            }
          />

          <Route
            path="/soporte"
            element={
              <ProtectedRoute>
                <RoleGuard allowedRoles={['admin', 'soporte']}>
                  <Soporte />
                </RoleGuard>
              </ProtectedRoute>
            }
          />

          {/* Perfil - accesible por todos los usuarios autenticados */}
          <Route
            path="/perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          />

          {/* Editor de presentaciones - requiere autenticación */}
          <Route
            path="/presentacion/:id"
            element={
              <ProtectedRoute>
                <Editor />
              </ProtectedRoute>
            }
          />

          {/* Páginas protegidas con layout/navbar - requiere usuario activo para crear */}
          <Route
            element={
              <ProtectedRoute>
                <LayoutConNavbar />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Home />} />
            <Route path="/crear" element={<Crear />} />
            <Route path="/crud" element={<ListaPresentaciones />} />
            <Route
              path="/crear-presentacion"
              element={
                <StateGuard requiredState="activo">
                  <CrearPresentacion />
                </StateGuard>
              }
            />
          </Route>

          {/* Ruta catch-all para rutas no encontradas */}
          <Route
            path="*"
            element={
              <div className="p-10 text-center">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Ruta no encontrada</h2>
                <p className="text-gray-600 mb-2">
                  URL actual: <code>{window.location.pathname + window.location.search}</code>
                </p>
                <p className="text-sm text-gray-500">
                  Si llegaste aquí desde Google OAuth, contacta al administrador.
                </p>
                <button
                  onClick={() => (window.location.href = '/')}
                  className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Ir al inicio
                </button>
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
