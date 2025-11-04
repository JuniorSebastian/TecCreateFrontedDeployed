// src/components/NavBar.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { 
  Bars3Icon, 
  XMarkIcon, 
  ArrowRightOnRectangleIcon,
  RectangleStackIcon,
  UserCircleIcon 
} from '@heroicons/react/24/outline';

export default function NavBar() {
  const [usuario, setUsuario] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerUsuario = () => {
      const guardado = localStorage.getItem('usuario');
      if (guardado) {
        try {
          setUsuario(JSON.parse(guardado));
        } catch (e) {
          console.error('Error leyendo usuario:', e);
        }
      }
    };

    obtenerUsuario();

    const handleStorageChange = () => obtenerUsuario();
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCerrarSesion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setOpenMenu(false);
    setMobileMenuOpen(false);
    navigate('/');
  };

  return (
    <>
      {/* Navbar principal con efecto glass - MÁS GRANDE */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-sm">
        {/* Barra de gradiente superior */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-sky-500"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo MÁS GRANDE */}
            <Link 
              to="/perfil" 
              className="flex items-center group transition-transform duration-300 hover:scale-105"
            >
              <img
                src="https://i.ibb.co/Q3JXxDPY/Chat-GPT-Image-13-jun-2025-22-14-04-removebg-preview-Photoroom.png"
                alt="TecCreate"
                className="h-28 w-44 sm:h-32 sm:w-52 object-contain drop-shadow-lg transition-all duration-300 group-hover:drop-shadow-2xl"
              />
            </Link>

            {/* Desktop Navigation - MÁS GRANDE */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <Link
                to="/perfil"
                className="group relative flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 text-base font-semibold text-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-100/50 hover:scale-105"
              >
                <RectangleStackIcon className="w-6 h-6" />
                <span>Mis Presentaciones</span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-5"></div>
              </Link>

              {usuario && (
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setOpenMenu((prev) => !prev)}
                    className="flex items-center gap-3 pl-5 pr-3 py-3 rounded-full border border-gray-200/80 bg-white/90 text-base font-medium text-gray-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:shadow-blue-100/50"
                  >
                    <span className="hidden lg:block font-semibold text-gray-900">
                      {usuario.nombre?.split(' ')[0]}
                    </span>
                    <div className="relative">
                      <img
                        src={usuario.foto}
                        alt="Perfil"
                        className="h-10 w-10 rounded-full border-2 border-blue-100 object-cover ring-2 ring-white"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/default-avatar.png';
                        }}
                      />
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {openMenu && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setOpenMenu(false)}
                      ></div>
                      <div className="absolute right-0 mt-2 w-64 overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-xl shadow-gray-200/50 z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                        {/* User Info */}
                        <div className="px-4 py-3 border-b border-gray-100 bg-gradient-to-r from-blue-50/50 to-cyan-50/50">
                          <div className="flex items-center gap-3">
                            <img
                              src={usuario.foto}
                              alt="Perfil"
                              className="h-10 w-10 rounded-full border-2 border-blue-200 object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = '/default-avatar.png';
                              }}
                            />
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-gray-900 truncate">
                                {usuario.nombre}
                              </p>
                              <p className="text-xs text-gray-500 truncate">
                                {usuario.email}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Menu Items */}
                        <div className="py-2">
                          <Link
                            to="/perfil"
                            onClick={() => setOpenMenu(false)}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-700"
                          >
                            <UserCircleIcon className="w-5 h-5" />
                            <span>Mi Perfil</span>
                          </Link>
                          
                          <button
                            onClick={handleCerrarSesion}
                            className="flex w-full items-center gap-3 px-4 py-2.5 text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                          >
                            <ArrowRightOnRectangleIcon className="w-5 h-5" />
                            <span>Cerrar Sesión</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl shadow-lg animate-in slide-in-from-top duration-200">
            <div className="px-4 py-4 space-y-3">
              {usuario && (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50">
                  <img
                    src={usuario.foto}
                    alt="Perfil"
                    className="h-12 w-12 rounded-full border-2 border-blue-200 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/default-avatar.png';
                    }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-gray-900 truncate">
                      {usuario.nombre}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {usuario.email}
                    </p>
                  </div>
                </div>
              )}

              <Link
                to="/perfil"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 text-sm font-semibold text-blue-700 transition-all hover:shadow-md"
              >
                <RectangleStackIcon className="w-5 h-5" />
                <span>Mis Presentaciones</span>
              </Link>

              {usuario && (
                <>
                  <Link
                    to="/perfil"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100"
                  >
                    <UserCircleIcon className="w-5 h-5" />
                    <span>Mi Perfil</span>
                  </Link>

                  <button
                    onClick={handleCerrarSesion}
                    className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 transition-colors hover:bg-red-50"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    <span>Cerrar Sesión</span>
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Spacer para compensar el navbar fixed */}
      <div className="h-20"></div>
    </>
  );
}
