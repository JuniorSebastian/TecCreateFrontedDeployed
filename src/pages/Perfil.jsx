// src/pages/Perfil.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AdjustmentsHorizontalIcon,
  ArrowRightOnRectangleIcon,
  ArrowPathIcon,
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  ClipboardIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  LightBulbIcon,
  PaintBrushIcon,
  PlusCircleIcon,
  PresentationChartBarIcon,
  RectangleStackIcon,
  RocketLaunchIcon,
  ShareIcon,
  Squares2X2Icon,
  SparklesIcon,
  XMarkIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import {
  obtenerMisPresentaciones,
  exportarPresentacion,
  compartirPresentacion,
} from '../services/api';
import SidebarNavLink from '../components/SidebarLink';
import { useAuth } from '../context/AuthContext';

function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden relative">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-[60%] left-[30%] w-3 h-3 bg-cyan-400/60 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute top-[40%] right-[20%] w-2 h-2 bg-sky-400/60 rounded-full animate-ping animation-delay-2000"></div>
        <div className="absolute bottom-[30%] right-[15%] w-3 h-3 bg-blue-300/60 rounded-full animate-ping animation-delay-3000"></div>
        <div className="absolute top-[80%] left-[60%] w-2 h-2 bg-cyan-300/60 rounded-full animate-ping animation-delay-500"></div>
      </div>
      
      {/* Main loading container */}
      <div className="relative z-10 bg-white/10 backdrop-blur-2xl rounded-[2.5rem] px-12 py-16 shadow-[0_0_80px_rgba(59,130,246,0.5)] border border-white/20 flex flex-col items-center animate-fade-in-up">
        {/* Rotating ring around logo */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-72 h-72 border-4 border-transparent border-t-blue-400 border-r-cyan-400 rounded-full animate-spin"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-transparent border-b-sky-400 border-l-blue-300 rounded-full animate-spin-reverse animation-delay-500"></div>
          </div>
          
          {/* Logo with glow effect */}
          <div className="relative z-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <img
              src="https://i.ibb.co/Q3JXxDPY/Chat-GPT-Image-13-jun-2025-22-14-04-removebg-preview-Photoroom.png"
              alt="TecCreate logo"
              className="relative w-60 md:w-72 drop-shadow-[0_0_40px_rgba(59,130,246,0.8)] animate-float"
            />
          </div>
        </div>
        
        {/* Text with gradient animation */}
        <h1 className="text-4xl md:text-5xl font-black text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-400 bg-clip-text text-center mb-4 tracking-tight animate-gradient bg-[length:200%_auto]">
          TecCreate
        </h1>
        
        <p className="text-blue-200 font-semibold text-lg md:text-xl text-center max-w-sm mb-6 animate-pulse">
          Cargando tu cuenta...
        </p>
        
        {/* Loading bar with gradient */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden shadow-inner">
          <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-sky-500 rounded-full animate-loading-bar shadow-[0_0_20px_rgba(59,130,246,0.8)]"></div>
        </div>
        
        {/* Pulsing dots */}
        <div className="flex gap-2 mt-8">
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce animation-delay-200"></div>
          <div className="w-3 h-3 bg-sky-400 rounded-full animate-bounce animation-delay-400"></div>
        </div>
      </div>
      
      {/* Corner decorations */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-blue-400/40 rounded-tl-3xl"></div>
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-cyan-400/40 rounded-br-3xl"></div>
    </div>
  );
}

function ShareModal({ info, onClose, onRegenerate, isRegenerating }) {
  const [copied, setCopied] = useState(false);
  const shareUrl = info?.payload?.shareUrl;

  useEffect(() => {
    setCopied(false);
  }, [shareUrl]);

  if (!info) return null;

  const { presentacion, payload } = info;
  const fileName = payload?.fileName;
  const createdAt = payload?.createdAt;
  const formattedDate = createdAt ? new Date(createdAt).toLocaleString() : null;
  const qrCode = payload?.qrCodeDataUrl;

  const handleCopyLink = async () => {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = shareUrl;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('No se pudo copiar el enlace', err);
      }
    }
  };

  const handleOpenLink = () => {
    if (!shareUrl) return;
    window.open(shareUrl, '_blank', 'noopener,noreferrer');
  };

  const handleRegenerateClick = () => {
    if (isRegenerating || !onRegenerate) return;
    onRegenerate();
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/30 backdrop-blur-sm px-4 sm:px-6">
      <div className="relative w-full max-w-3xl rounded-2xl sm:rounded-3xl border border-cyan-100 bg-white/95 p-5 sm:p-6 lg:p-8 shadow-[0_25px_65px_rgba(6,182,212,0.2)] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 sm:right-5 sm:top-5 inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-cyan-100 text-cyan-500 transition hover:bg-cyan-50"
          aria-label="Cerrar"
        >
          <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <div className="space-y-4 sm:space-y-5 lg:space-y-6">
          <div className="text-center space-y-1.5 sm:space-y-2 pr-10">
            <h3 className="text-xl sm:text-2xl font-bold text-cyan-700">Tu enlace está listo</h3>
            <p className="text-xs sm:text-sm text-cyan-500/80">
              Cualquiera con el enlace podrá descargar el PPT en modo solo lectura.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 sm:gap-5 lg:gap-6 md:flex-row md:items-start">
            {qrCode && (
              <div className="flex flex-col items-center gap-2">
                <img
                  src={qrCode}
                  alt={`Código QR para ${presentacion?.titulo || 'presentación'}`}
                  className="h-36 w-36 sm:h-40 sm:w-40 lg:h-48 lg:w-48 rounded-2xl sm:rounded-3xl border border-cyan-100 bg-white p-3 sm:p-4 shadow-inner"
                />
                <span className="text-[10px] sm:text-xs text-cyan-500/70">Escanéalo para compartir al instante</span>
              </div>
            )}
            <div className="flex-1 w-full space-y-3 sm:space-y-4">
              <div className="rounded-xl sm:rounded-2xl border border-cyan-100 bg-cyan-50/60 p-3 sm:p-4 text-left">
                <p className="text-sm sm:text-base font-semibold text-cyan-700 line-clamp-2">
                  {presentacion?.titulo || 'Presentación TecCreate'}
                </p>
                {fileName && (
                  <p className="mt-1 break-all text-xs text-cyan-500/70 line-clamp-1">{fileName}</p>
                )}
                {formattedDate && (
                  <p className="mt-2 text-xs text-cyan-400">Generado el {formattedDate}</p>
                )}
              </div>
              {shareUrl && (
                <div className="space-y-2 sm:space-y-3">
                  <div className="rounded-xl sm:rounded-2xl border border-cyan-100 bg-white px-3 sm:px-4 py-2.5 sm:py-3 text-left text-xs sm:text-sm text-cyan-600 break-all">
                    {shareUrl}
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <button
                      onClick={handleCopyLink}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full bg-cyan-600 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white shadow hover:bg-cyan-700 transition-all"
                    >
                      <ClipboardIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      {copied ? 'Enlace copiado' : 'Copiar enlace'}
                    </button>
                    <button
                      onClick={handleOpenLink}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-cyan-200 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-cyan-600 transition hover:border-cyan-300 hover:bg-cyan-50"
                    >
                      <ArrowTopRightOnSquareIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline">Abrir en nueva pestaña</span>
                      <span className="sm:hidden">Abrir</span>
                    </button>
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  onClick={handleRegenerateClick}
                  disabled={isRegenerating || !onRegenerate}
                  className="inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-full border border-cyan-200 px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-600 transition hover:border-cyan-300 hover:bg-cyan-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <ArrowPathIcon className={`h-3.5 w-3.5 sm:h-4 sm:w-4 ${isRegenerating ? 'animate-spin' : ''}`} />
                  {isRegenerating ? 'Regenerando enlace…' : 'Regenerar enlace'}
                </button>
                <button
                  onClick={onClose}
                  className="text-xs sm:text-sm font-semibold text-cyan-600 underline-offset-4 hover:text-cyan-800 hover:underline"
                >
                  Listo, cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Perfil() {
  const location = useLocation();
  const navigate = useNavigate();
  const { canCreatePresentations, canExportPresentations, isInactivo } = useAuth();
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [loading, setLoading] = useState(true);
  const [presentaciones, setPresentaciones] = useState([]);
  const [cargandoPresentaciones, setCargandoPresentaciones] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [descargandoId, setDescargandoId] = useState(null);
  const [descargaProgreso, setDescargaProgreso] = useState(0);
  const [compartiendoId, setCompartiendoId] = useState(null);
  const [shareModalData, setShareModalData] = useState(null);
  const [shareCache, setShareCache] = useState({});
  const [shareError, setShareError] = useState('');
  const totalPresentaciones = presentaciones.length;
  const hasPresentaciones = totalPresentaciones > 0;
  const progresoPresentaciones = Math.min(totalPresentaciones * 20, 100);
  const progresoAnimado = totalPresentaciones === 0 ? 12 : Math.max(progresoPresentaciones, 18);
  const pasosDescarga = [
    { limite: 20, mensaje: 'Analizando narrativa y tono del discurso…' },
    { limite: 45, mensaje: 'Componiendo diapositivas y estructura visual…' },
    { limite: 70, mensaje: 'Generando recursos visuales y elementos gráficos…' },
    { limite: 90, mensaje: 'Aplicando pulido final y consistencia tipográfica…' },
    { limite: 100, mensaje: 'Empaquetando presentación y preparando la descarga…' },
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token');
    const nombre = searchParams.get('nombre');
    const email = searchParams.get('email');
    const rol = searchParams.get('rol');
    const foto = searchParams.get('foto');

    if (token && nombre && email && rol) {
      const userData = { nombre, email, rol, foto };
      localStorage.setItem('token', token);
      localStorage.setItem('usuario', JSON.stringify(userData));
      setUsuario(userData);
      window.history.replaceState({}, document.title, '/perfil');
    } else {
      const savedUser = localStorage.getItem('usuario');
      const savedToken = localStorage.getItem('token');
      
      // Si no hay token, redirigir inmediatamente al inicio
      if (!savedToken) {
        window.location.href = '/';
        return;
      }
      
      if (savedUser) setUsuario(JSON.parse(savedUser));
    }

    setTimeout(() => setLoading(false), 800);
  }, [location]);

  useEffect(() => {
    const fetchPresentaciones = async () => {
      setCargandoPresentaciones(true);
      try {
        const res = await obtenerMisPresentaciones();
        const data = res.data;
        setPresentaciones(data);

        if (location.state?.nuevaPresentacion) {
          setMensajeExito('¡Presentación creada con éxito!');
          navigate('/perfil', { replace: true });
        }
      } catch (error) {
        console.error('Error al obtener presentaciones', error);
      } finally {
        setCargandoPresentaciones(false);
      }
    };

    if (usuario) fetchPresentaciones();
  }, [usuario, location.state, navigate]);

  const cerrarSesion = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    // Usar window.location.href para forzar recarga completa
    window.location.href = '/';
  };

  const handleCrearConIA = () => {
    if (!canCreatePresentations()) {
      alert('Tu cuenta está inactiva. No puedes crear nuevas presentaciones. Contacta al administrador.');
      return;
    }
    navigate('/crear-presentacion');
  };

  const sanitizeFileName = (value) =>
    (value || 'presentacion')
      .toString()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-zA-Z0-9-_ ]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  const descargarPresentacion = async (presentacion) => {
    if (!presentacion?.id) return;

    if (!canExportPresentations()) {
      alert('Tu cuenta está inactiva. No puedes exportar presentaciones. Contacta al administrador.');
      return;
    }

    setDescargandoId(presentacion.id);
    setDescargaProgreso(5);
    let intervalo;
    try {
      intervalo = setInterval(() => {
        setDescargaProgreso((prev) => {
          const siguiente = prev + Math.random() * 20;
          return siguiente >= 95 ? 95 : siguiente;
        });
      }, 600);

      const response = await exportarPresentacion(presentacion.id);
      setDescargaProgreso(100);
      const blob = new Blob([response.data], {
        type:
          response.headers['content-type'] ||
          'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      });

      let filename = `TecCreate-${sanitizeFileName(presentacion.titulo)}.pptx`;
      const disposition = response.headers['content-disposition'];
      if (disposition) {
        const match = disposition.match(/filename\*=UTF-8''(.+)$|filename="?([^";]+)"?/i);
        const rawName = match?.[1] || match?.[2];
        if (rawName) {
          try {
            filename = decodeURIComponent(rawName);
          } catch (error) {
            filename = rawName;
          }
        }
      }

      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error al descargar la presentación', error);
      alert('No se pudo descargar la presentación. Intenta nuevamente.');
    } finally {
      if (intervalo) clearInterval(intervalo);
      setDescargandoId(null);
      setTimeout(() => setDescargaProgreso(0), 400);
    }
  };

  const handleCompartir = async (presentacion, { force = false } = {}) => {
    if (!presentacion?.id) return;

    if (!force && shareCache[presentacion.id]) {
      setShareModalData(shareCache[presentacion.id]);
      setShareError('');
      return;
    }

    setCompartiendoId(presentacion.id);
    setShareError('');

    try {
      const data = await compartirPresentacion(presentacion.id);
      const shareInfo = {
        presentacion: {
          id: presentacion.id,
          titulo: presentacion.titulo,
        },
        payload: data,
      };

      setShareCache((prev) => ({ ...prev, [presentacion.id]: shareInfo }));
      setShareModalData(shareInfo);
    } catch (error) {
      console.error('Error al compartir la presentación', error);
      const status = error?.response?.status;
      let message = 'No se pudo generar el enlace compartido. Intenta nuevamente.';
      if (status === 401) {
        message = 'Tu sesión expiró. Inicia sesión otra vez para compartir.';
      } else if (status === 404) {
        message = 'No encontramos esta presentación, verifica que exista.';
      } else if (status === 503) {
        message = 'El servicio de generación está temporalmente inactivo. Intenta en unos minutos.';
      } else if (status >= 500) {
        message = 'Ocurrió un problema en el servidor al preparar el PPT.';
      }
      setShareError(message);
    } finally {
      setCompartiendoId(null);
    }
  };

  const closeShareModal = () => setShareModalData(null);

  const handleRegenerarCompartir = () => {
    if (!shareModalData?.presentacion) return;
    handleCompartir(shareModalData.presentacion, { force: true });
  };

  if (loading) return <LoadingScreen />;

  if (!usuario) {
    // Redirigir al inicio si no hay usuario usando window.location
    window.location.href = '/';
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-gradient-to-br from-cyan-50 via-white to-blue-50 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-1/2 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute bottom-0 left-1/3 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      
      {/* Botón menú móvil */}
      <button
        onClick={() => setMenuAbierto(!menuAbierto)}
        className="lg:hidden fixed top-4 left-4 z-50 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/90 backdrop-blur-xl shadow-2xl border-2 border-cyan-200 text-cyan-600 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-300"
        aria-label="Abrir menú"
      >
        {menuAbierto ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Overlay móvil */}
      {menuAbierto && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setMenuAbierto(false)}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:relative inset-y-0 left-0 z-40
        w-72 lg:w-80
        transform transition-transform duration-300 ease-in-out
        ${menuAbierto ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        border-r border-cyan-100/50 bg-white/80 backdrop-blur-xl shadow-2xl
        p-5 sm:p-6 lg:p-7
      `}>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-50/80 via-white/85 to-white opacity-90"></div>
        <div className="absolute -top-32 -right-28 h-56 w-56 rounded-full bg-cyan-300/25 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-24 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl"></div>
        <div className="relative flex h-full flex-col justify-between space-y-6 sm:space-y-8">
          <div className="space-y-6 sm:space-y-8">
            <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
              <div className="relative group">
                <img
                  src="https://i.ibb.co/Q3JXxDPY/Chat-GPT-Image-13-jun-2025-22-14-04-removebg-preview-Photoroom.png"
                  alt="TecCreate Logo"
                  className="w-40 sm:w-48 drop-shadow-2xl transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-[0.45em] text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-600 bg-clip-text">TecCreate</p>
                <p className="text-xs sm:text-sm text-gray-600 font-medium">Diseña, personaliza y comparte sin límites.</p>
              </div>
            </div>
            <nav className="space-y-2">
              <SidebarNavLink
                icon={<Squares2X2Icon className="h-5 w-5" />}
                text="Todos mis Creates"
                active
                onClick={() => {
                  navigate('/perfil');
                  setMenuAbierto(false);
                }}
              />
              <SidebarNavLink
                icon={<RectangleStackIcon className="h-5 w-5" />}
                text="Plantillas"
                onClick={() => {
                  navigate('/plantillas');
                  setMenuAbierto(false);
                }}
              />
              <SidebarNavLink
                icon={<PaintBrushIcon className="h-5 w-5" />}
                text="Temas"
                onClick={() => {
                  navigate('/temas');
                  setMenuAbierto(false);
                }}
              />
              <SidebarNavLink
                icon={<AdjustmentsHorizontalIcon className="h-5 w-5" />}
                text="Fuentes Personalizadas"
                onClick={() => {
                  navigate('/fuentes', { state: { fromPerfil: true } });
                  setMenuAbierto(false);
                }}
              />
              <SidebarNavLink
                icon={<ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5" />}
                text="Contáctanos"
                onClick={() => {
                  navigate('/contacto');
                  setMenuAbierto(false);
                }}
              />
            </nav>
            <div className="group rounded-2xl border-2 border-cyan-200/50 bg-gradient-to-br from-cyan-50 to-blue-50 px-4 sm:px-5 py-3 sm:py-4 shadow-lg transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-2xl">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-blue-500 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <SparklesIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.35em] text-cyan-600">Progreso</p>
                  <p className="text-xs sm:text-sm font-bold text-gray-800">Tus historias en marcha</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-gray-600">
                  <span>Presentaciones creadas</span>
                  <span className="text-cyan-600 font-bold text-sm sm:text-base">{totalPresentaciones}</span>
                </div>
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-cyan-100 shadow-inner">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-400 to-blue-500 shadow-lg transition-all duration-700 ease-out"
                    style={{ width: `${progresoAnimado}%` }}
                  ></div>
                </div>
                <p className="text-[10px] sm:text-[11px] text-gray-500 font-medium">Cada nuevo proyecto actualiza tu panel automáticamente.</p>
              </div>
            </div>
          </div>
          <button
            onClick={cerrarSesion}
            className="group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-50 to-pink-50 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-red-600 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-300 hover:shadow-xl hover:from-red-100 hover:to-pink-100"
          >
            <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-red-100 text-red-600 transition-all duration-300 group-hover:bg-red-200 group-hover:scale-110 group-hover:rotate-12">
              <ArrowRightOnRectangleIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            Cerrar Sesión
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="relative flex-1 flex flex-col p-4 sm:p-6 lg:p-10 pt-20 lg:pt-10 z-10">{/* Padding-top aumentado en móvil para el botón hamburguesa */}
        <div className="relative mb-6 sm:mb-8 lg:mb-10 overflow-hidden rounded-2xl sm:rounded-3xl border-2 border-cyan-200/50 bg-gradient-to-r from-cyan-600 via-blue-500 to-blue-500 p-5 sm:p-6 lg:p-8 text-white shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-80 mix-blend-screen"></div>
          <div className="absolute -top-24 -left-24 h-48 sm:h-64 w-48 sm:w-64 rounded-full bg-white/30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-24 sm:-bottom-36 right-0 h-56 sm:h-72 w-56 sm:w-72 rounded-full bg-cyan-300/40 blur-[110px] animate-pulse-slow animation-delay-2000"></div>
          <div className="relative z-10 flex flex-col gap-5 sm:gap-6 lg:gap-8">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 self-start rounded-full bg-white/20 border border-white/30 px-3 sm:px-4 lg:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-bold text-white backdrop-blur-md shadow-lg">
              <SparklesIcon className="h-4 w-4 sm:h-5 sm:w-5 animate-pulse" />
              Espacio creativo listo para tus ideas
            </div>
            <div className="flex flex-col gap-5 sm:gap-6 lg:gap-8 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 lg:gap-5">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-white via-cyan-200 to-blue-200 rounded-xl sm:rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 overflow-hidden rounded-xl sm:rounded-2xl border-2 sm:border-4 border-white/50 bg-white/30 shadow-2xl backdrop-blur-sm">
                    <img 
                      src={usuario.foto || `https://ui-avatars.com/api/?name=${encodeURIComponent(usuario.nombre || 'Usuario')}&background=3b82f6&color=fff&size=200`} 
                      alt="Avatar" 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(usuario.nombre || 'Usuario')}&background=3b82f6&color=fff&size=200`;
                      }}
                    />
                  </div>
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-sm font-bold text-white/90 uppercase tracking-wider">Bienvenido de nuevo</p>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight drop-shadow-lg line-clamp-1">{usuario.nombre}</p>
                  <button className="text-xs sm:text-sm font-semibold text-white/90 underline-offset-4 transition hover:text-white hover:underline hover:scale-105 inline-flex items-center gap-1">
                    Gestionar cuenta
                    <ArrowTopRightOnSquareIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 sm:gap-4 sm:flex-row sm:items-center">
                <div className="group flex items-center gap-3 sm:gap-4 rounded-xl sm:rounded-2xl border-2 border-white/30 bg-white/25 px-4 sm:px-5 lg:px-6 py-3 sm:py-4 shadow-2xl backdrop-blur-lg hover:bg-white/30 hover:scale-105 transition-all duration-300 w-full sm:w-auto">
                  <div className="rounded-lg sm:rounded-xl bg-white/40 p-2 sm:p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <PresentationChartBarIcon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-white/90">Tus Creates</p>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight drop-shadow-lg">{totalPresentaciones}</p>
                  </div>
                </div>
                <button
                  onClick={handleCrearConIA}
                  disabled={!canCreatePresentations()}
                  title={!canCreatePresentations() ? 'Cuenta inactiva - contacta al administrador' : ''}
                  className={`group inline-flex items-center justify-center gap-2 sm:gap-3 rounded-full px-5 sm:px-6 lg:px-8 py-3 sm:py-4 font-bold text-sm sm:text-base shadow-2xl transition-all duration-300 w-full sm:w-auto ${
                    canCreatePresentations()
                      ? 'bg-white text-cyan-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(255,255,255,0.5)] cursor-pointer hover:scale-105'
                      : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                  }`}
                >
                  <PlusCircleIcon className="h-5 w-5 sm:h-6 sm:w-6 group-hover:rotate-90 transition-transform duration-300" /> 
                  Crear presentación
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Advertencia cuenta inactiva */}
        {isInactivo() && (
          <div className="mb-5 sm:mb-6 lg:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-yellow-50 border border-yellow-300 text-yellow-800 shadow-lg flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <ExclamationTriangleIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm sm:text-base">Tu cuenta está inactiva</p>
              <p className="text-xs sm:text-sm text-yellow-700">No puedes crear nuevas presentaciones ni exportar. Contacta al administrador para reactivar tu cuenta.</p>
            </div>
          </div>
        )}

        {/* Éxito */}
        {mensajeExito && (
          <div className="mb-5 sm:mb-6 lg:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-green-50 border border-green-200 text-green-800 shadow-inner flex flex-col sm:flex-row items-start gap-2 sm:gap-3">
            <SparklesIcon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="font-medium text-sm sm:text-base">{mensajeExito}</span>
          </div>
        )}
        {shareError && (
          <div className="mb-5 sm:mb-6 lg:mb-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-red-50 border border-red-200 text-red-600 shadow-inner">
            <p className="text-xs sm:text-sm font-semibold">{shareError}</p>
          </div>
        )}

        {/* Presentaciones */}
        {cargandoPresentaciones ? (
          <div className="flex-1 flex items-center justify-center p-8 sm:p-12">
            <div className="text-cyan-600 font-semibold animate-pulse text-base sm:text-lg">
              Cargando presentaciones...
            </div>
          </div>
        ) : !hasPresentaciones ? (
          <div className="flex-1 bg-white/80 backdrop-blur rounded-2xl sm:rounded-3xl border border-dashed border-cyan-200 shadow-xl p-6 sm:p-8 lg:p-12 flex flex-col items-center justify-center text-center gap-5 sm:gap-6 lg:gap-8">
            <div className="relative flex items-center justify-center w-48 sm:w-52 lg:w-60 h-32 sm:h-36 lg:h-40 rounded-2xl sm:rounded-3xl bg-white shadow-2xl ring-4 ring-cyan-100 mx-auto">
              <div className="absolute inset-1 rounded-2xl sm:rounded-3xl border border-cyan-100/60" aria-hidden="true"></div>
              <img
                src="https://i.ibb.co/Q3JXxDPY/Chat-GPT-Image-13-jun-2025-22-14-04-removebg-preview-Photoroom.png"
                alt="Mascota TecCreate"
                className="relative h-full object-contain drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)]"
              />
            </div>
            <div className="space-y-4 sm:space-y-5 lg:space-y-6 max-w-2xl">
              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">Crea tu primer proyecto</h3>
                <p className="text-sm sm:text-base text-gray-600 px-4">
                  Impulsa tus ideas con nuestra inteligencia artificial y transforma tus conceptos en historias visuales listas para presentar.
                </p>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-cyan-500">Descubre todo lo que recibes</p>
              </div>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-3">
                <div className="group rounded-xl sm:rounded-2xl bg-white/90 px-4 sm:px-5 py-3 sm:py-4 shadow-lg border border-cyan-100 hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-cyan-100 text-cyan-600 shadow-inner flex-shrink-0">
                      <RocketLaunchIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </span>
                    <div className="text-left space-y-1">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">Genera en segundos</p>
                      <p className="text-xs sm:text-sm text-gray-500">Describe tu idea y obtén una presentación completa con narrativa, imágenes y estructura profesional.</p>
                    </div>
                  </div>
                </div>
                <div className="group rounded-xl sm:rounded-2xl bg-white/90 px-4 sm:px-5 py-3 sm:py-4 shadow-lg border border-cyan-100 hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-cyan-100 text-cyan-600 shadow-inner flex-shrink-0">
                      <LightBulbIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </span>
                    <div className="text-left space-y-1">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">Ideas personalizadas</p>
                      <p className="text-xs sm:text-sm text-gray-500">Refina cada diapositiva con sugerencias inteligentes, estilos creados para ti y opciones ilimitadas de diseño.</p>
                    </div>
                  </div>
                </div>
                <div className="group rounded-xl sm:rounded-2xl bg-white/90 px-4 sm:px-5 py-3 sm:py-4 shadow-lg border border-cyan-100 hover:-translate-y-1 hover:border-cyan-300 transition-all duration-300">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-cyan-100 text-cyan-600 shadow-inner flex-shrink-0">
                      <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                    </span>
                    <div className="text-left space-y-1">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">Comparte con QR</p>
                      <p className="text-xs sm:text-sm text-gray-500">Genera un enlace con código QR para que otros vean tu presentación terminada; la visualización es solo lectura.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={handleCrearConIA}
              disabled={!canCreatePresentations()}
              title={!canCreatePresentations() ? 'Cuenta inactiva - contacta al administrador' : ''}
              className={`inline-flex items-center gap-2 px-5 sm:px-6 lg:px-7 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-transform ${
                canCreatePresentations()
                  ? 'bg-cyan-600 text-white hover:bg-cyan-700 hover:-translate-y-0.5 cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
              }`}
            >
              <SparklesIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Crear con IA
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6 lg:mb-8">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-cyan-100 p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Presentaciones activas</p>
                  <p className="text-xl sm:text-2xl font-bold text-gray-800">{totalPresentaciones}</p>
                </div>
                <PresentationChartBarIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500 flex-shrink-0" />
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-cyan-100 p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Ideas destacadas</p>
                  <p className="text-base sm:text-lg font-semibold text-gray-800">Sigue creando</p>
                </div>
                <SparklesIcon className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500 flex-shrink-0" />
              </div>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-cyan-100 p-4 sm:p-5 flex items-center justify-between sm:col-span-2 lg:col-span-1">
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">Acción rápida</p>
                  <button
                    onClick={handleCrearConIA}
                    disabled={!canCreatePresentations()}
                    title={!canCreatePresentations() ? 'Cuenta inactiva - contacta al administrador' : ''}
                    className={`mt-1 inline-flex items-center gap-1.5 sm:gap-2 font-semibold text-sm sm:text-base ${
                      canCreatePresentations()
                        ? 'text-cyan-600 hover:text-cyan-700 cursor-pointer'
                        : 'text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <PlusCircleIcon className="w-4 h-4 sm:w-5 sm:h-5" /> Nueva presentación
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {presentaciones.map((pres) => (
                <div
                  key={pres.id}
                  className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/90 backdrop-blur-sm shadow-xl border-2 border-cyan-100 hover:border-cyan-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/80 via-blue-50/40 to-cyan-50/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-cyan-400/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {descargandoId === pres.id && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 sm:gap-4 bg-white/95 backdrop-blur-md px-4 sm:px-6 text-center rounded-2xl sm:rounded-3xl">
                      <div className="relative">
                        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-xl animate-pulse"></div>
                        <ArrowPathIcon className="relative h-8 w-8 sm:h-10 sm:w-10 animate-spin text-cyan-600" />
                      </div>
                      <p className="text-xs sm:text-sm font-bold text-cyan-700 px-2">
                        {pasosDescarga.find((paso) => descargaProgreso < paso.limite)?.mensaje || pasosDescarga[pasosDescarga.length - 1].mensaje}
                      </p>
                      <div className="h-2.5 sm:h-3 w-full max-w-xs overflow-hidden rounded-full bg-cyan-100 shadow-inner">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-600 via-blue-500 to-blue-500 shadow-lg transition-all duration-300 ease-out"
                          style={{ width: `${Math.min(descargaProgreso, 100)}%` }}
                        ></div>
                      </div>
                      <p className="text-[10px] sm:text-xs font-semibold text-cyan-600">
                        La descarga comenzará automáticamente
                      </p>
                    </div>
                  )}
                  
                  <div className="relative p-4 sm:p-5 lg:p-6 space-y-3 sm:space-y-4">
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="flex-1">
                        <div className="inline-flex items-center gap-1.5 sm:gap-2 mb-2 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r from-cyan-100 to-blue-100 border border-cyan-200">
                          <PresentationChartBarIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-600" />
                          <span className="text-[10px] sm:text-xs font-bold text-cyan-700 uppercase tracking-wide">Presentación</span>
                        </div>
                        <h4 className="text-base sm:text-lg lg:text-xl font-extrabold text-gray-900 leading-tight line-clamp-2 group-hover:text-cyan-700 transition-colors duration-300">
                          {pres.titulo}
                        </h4>
                      </div>
                    </div>
                    
                    <div className="min-h-[60px] sm:min-h-[80px] rounded-xl bg-gradient-to-br from-cyan-50/50 to-blue-50/50 border border-cyan-100/50 p-3 sm:p-4">
                      <p className="text-xs sm:text-sm text-gray-700 line-clamp-3 leading-relaxed">
                        {pres.descripcion || 'Tip: Abre el editor para documentar objetivos, público clave y CTA. Esa información ayudará a contextualizar la narrativa de tu presentación.'}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg border border-cyan-100">
                      <ShareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                      Comparte con QR para vista solo lectura
                    </div>
                    
                    <div className="flex flex-col gap-2 pt-2 border-t-2 border-cyan-100/50">
                      <button
                        onClick={() => navigate(`/presentacion/${pres.id}`)}
                        className="w-full inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all duration-300 hover:from-cyan-700 hover:to-blue-700 hover:shadow-xl hover:scale-105"
                      >
                        <ArrowRightOnRectangleIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                        Abrir editor
                      </button>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <button
                          onClick={() => handleCompartir(pres)}
                          disabled={compartiendoId === pres.id}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border-2 border-cyan-200 bg-white px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-cyan-700 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-50 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60 shadow-md"
                        >
                          {compartiendoId === pres.id ? (
                            <>
                              <ArrowPathIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-spin" />
                              <span className="hidden sm:inline">Preparando enlace…</span>
                              <span className="sm:hidden">Preparando…</span>
                            </>
                          ) : (
                            <>
                              <ShareIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                              Compartir
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => descargarPresentacion(pres)}
                          disabled={descargandoId === pres.id || !canExportPresentations()}
                          title={!canExportPresentations() ? 'Cuenta inactiva - no puedes exportar' : ''}
                          className={`flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 rounded-xl border-2 px-3 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold transition shadow-md ${
                            canExportPresentations() && descargandoId !== pres.id
                              ? 'border-cyan-200 text-cyan-600 hover:border-cyan-300 hover:bg-cyan-50 cursor-pointer'
                              : 'border-gray-200 text-gray-400 cursor-not-allowed opacity-60'
                          }`}
                        >
                          {descargandoId === pres.id ? (
                            <>
                              <span className="hidden sm:inline">Descargando…</span>
                              <span className="sm:hidden">...</span>
                            </>
                          ) : (
                            <>
                              <span className="hidden sm:inline">Descargar PPT</span>
                              <span className="sm:hidden">PPT</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
        <ShareModal
          info={shareModalData}
          onClose={closeShareModal}
          onRegenerate={shareModalData ? handleRegenerarCompartir : null}
          isRegenerating={Boolean(
            shareModalData?.presentacion?.id && compartiendoId === shareModalData.presentacion.id
          )}
        />
      </main>
    </div>
  );
}
