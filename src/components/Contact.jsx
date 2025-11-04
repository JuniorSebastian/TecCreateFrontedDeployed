// src/components/Contact.jsx
import React from 'react';
import { 
  EnvelopeIcon, 
  MapPinIcon, 
  PhoneIcon,
  CheckCircleIcon,
  SparklesIcon,
  UserCircleIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  BoltIcon,
  ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';

// Estilos CSS personalizados para animaciones
const styles = `
  @keyframes blob {
    0%, 100% { transform: translate(0, 0) scale(1); }
    25% { transform: translate(20px, -50px) scale(1.1); }
    50% { transform: translate(-20px, 20px) scale(0.9); }
    75% { transform: translate(20px, 20px) scale(1.05); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(30px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes pulse-glow {
    0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }
    50% { box-shadow: 0 0 40px rgba(6, 182, 212, 0.8); }
  }
  
  @keyframes gradient {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  .animate-blob { animation: blob 7s infinite; }
  .animate-float { animation: float 3s ease-in-out infinite; }
  .animate-fadeIn { animation: fadeIn 0.8s ease-out forwards; }
  .animate-slideInLeft { animation: slideInLeft 0.6s ease-out forwards; opacity: 0; }
  .animate-slideInRight { animation: slideInRight 0.6s ease-out forwards; opacity: 0; }
  .animate-shimmer { animation: shimmer 2s infinite; }
  .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
  .animate-gradient { animation: gradient 3s ease infinite; background-size: 200% 200%; }
  
  .animation-delay-100 { animation-delay: 0.1s; }
  .animation-delay-200 { animation-delay: 0.2s; }
  .animation-delay-300 { animation-delay: 0.3s; }
  .animation-delay-400 { animation-delay: 0.4s; }
  .animation-delay-500 { animation-delay: 0.5s; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
  
  .bg-size-200 { background-size: 200% 200%; }
  /* Hover shadow handled via Tailwind utility classes */
`;

export default function Contact() {
  return (
    <>
      <style>{styles}</style>
      <section className="min-h-screen py-20 bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100 relative overflow-hidden">
        {/* Elementos de fondo animados */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Header animado - RESPONSIVO */}
          <div className="text-center mb-12 sm:mb-16 animate-fadeIn px-4">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-lg opacity-50 animate-pulse-glow"></div>
                <div className="relative bg-white rounded-full p-3 sm:p-4 shadow-2xl">
                  <SparklesIcon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-600 animate-float" />
                </div>
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4 animate-gradient bg-size-200">
              Contáctanos
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Conoce más sobre nuestro proyecto y encuentra recursos útiles para crear presentaciones increíbles.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start px-4">
            {/* Información de contacto - Lado izquierdo */}
            <div className="space-y-8 animate-slideInLeft">
              {/* Tarjeta principal de info */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                  </span>
                  Información de Contacto
                </h3>
                
                <div className="space-y-6">
                  {/* Email - Equipo de Soporte */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                    <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <EnvelopeIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Equipo de Soporte</h4>
                      <div className="space-y-1.5">
                        <a href="mailto:junior.osorio@tecsup.edu.pe" className="block text-blue-600 hover:text-cyan-600 transition-colors font-medium text-sm">
                          junior.osorio@tecsup.edu.pe
                        </a>
                        <a href="mailto:rodrigo.diaz.i@tecsup.edu.pe" className="block text-blue-600 hover:text-cyan-600 transition-colors font-medium text-sm">
                          rodrigo.diaz.i@tecsup.edu.pe
                        </a>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">Respuesta en 24-48 horas</p>
                    </div>
                  </div>

                  {/* Ubicación - Solo Lima */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group animation-delay-100">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Ubicación</h4>
                      <p className="text-gray-700 font-medium">TECSUP Lima</p>
                      <p className="text-gray-600">Lima, Perú</p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group animation-delay-200">
                    <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Soporte Técnico</h4>
                      <p className="text-gray-700 font-medium">Lun - Vie: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Atención en línea</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sistema de Reportes */}
              <div className="bg-gradient-to-br from-cyan-600 via-blue-500 to-cyan-600 bg-size-200 animate-gradient rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <SparklesIcon className="w-7 h-7" />
                    Sistema de Reportes
                  </h4>
                  <p className="mb-4 text-cyan-50 leading-relaxed">
                    ¿Encontraste un problema o tienes una sugerencia? Utiliza nuestro sistema de reportes para enviar tu feedback.
                  </p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
                    <p className="text-sm font-semibold mb-2">📋 Para reportar problemas o solicitar soporte:</p>
                    <ul className="text-sm space-y-1 text-cyan-50">
                      <li>• Inicia sesión en tu cuenta</li>
                      <li>• Visita la sección de <strong>Reportes</strong></li>
                      <li>• Describe el problema detalladamente</li>
                    </ul>
                  </div>
                  <a 
                    href="/soporte" 
                    className="inline-flex items-center gap-2 bg-white text-cyan-600 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Ir a Reportes
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Enlaces importantes - Lado derecho */}
            <div className="animate-slideInRight space-y-8">
              {/* Título */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform transition-all duration-500 hover:shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Enlaces Importantes</h3>
                <p className="text-gray-600 mb-8">
                  Descubre más sobre nuestro proyecto, explora el código fuente y conoce al equipo.
                </p>

                <div className="space-y-4">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/juniorsebastian/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group border-2 border-transparent hover:border-blue-300"
                  >
                    <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <UserCircleIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        LinkedIn
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-blue-500" />
                      </h4>
                      <p className="text-sm text-gray-600">Conéctate con el creador del proyecto</p>
                    </div>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/JuniorSebastian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-gray-50 to-slate-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group border-2 border-transparent hover:border-gray-400"
                  >
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <CodeBracketIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        GitHub
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-gray-500" />
                      </h4>
                      <p className="text-sm text-gray-600">Explora el código fuente y repositorios</p>
                    </div>
                  </a>

                  {/* Documentación */}
                  <a
                    href="https://docs.google.com/document/d/1TjcS1w0mx5UJmLtiwijjZ-3vPRD1cX54ci14w_6xWK0/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group border-2 border-transparent hover:border-cyan-300"
                  >
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <DocumentTextIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        Documentación
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-cyan-500" />
                      </h4>
                      <p className="text-sm text-gray-600">Guías y recursos del proyecto</p>
                    </div>
                  </a>

                  {/* Groq API */}
                  <a
                    href="https://groq.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-xl bg-gradient-to-br from-orange-50 to-yellow-50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group border-2 border-transparent hover:border-orange-300"
                  >
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-full p-3 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <BoltIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                        Groq API
                        <ArrowTopRightOnSquareIcon className="w-4 h-4 text-orange-500" />
                      </h4>
                      <p className="text-sm text-gray-600">Inteligencia artificial ultra-rápida</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Tarjeta decorativa adicional */}
              <div className="bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-600 bg-size-200 animate-gradient rounded-3xl p-8 shadow-2xl text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10 animate-shimmer"></div>
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-3">¿Por qué TecCreate?</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Plataforma intuitiva y fácil de usar</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Soporte técnico profesional</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Actualizaciones constantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 flex-shrink-0 mt-0.5" />
                      <span>Seguridad garantizada</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
