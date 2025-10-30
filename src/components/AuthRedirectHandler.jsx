import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthRedirectHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const token = params.get('token');
      const userRaw = params.get('user');
      const redirect = params.get('redirect');

      if (!token || !userRaw) return; // nothing to do

      let user = null;
      try {
        user = JSON.parse(decodeURIComponent(userRaw));
      } catch (e) {
        try {
          user = JSON.parse(userRaw);
        } catch (err) {
          console.warn('AuthRedirectHandler: user is not valid JSON');
          return;
        }
      }

      // Save tokens/user for compatibility
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(user));
      try {
        localStorage.setItem('authToken', token);
        localStorage.setItem('userData', JSON.stringify(user));
      } catch (e) {
        console.warn('Could not set alternate localStorage keys:', e);
      }

      // Determine redirect path
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

      // Clean query params from URL
      const basePath = window.location.pathname;
      window.history.replaceState({}, document.title, basePath);

      navigate(redirectPath, { replace: true });
    } catch (err) {
      console.error('AuthRedirectHandler error:', err);
    }
  }, [navigate]);

  return null;
}
