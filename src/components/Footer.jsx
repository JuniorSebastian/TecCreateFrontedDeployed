// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon, 
  SparklesIcon,
  MapPinIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  CommandLineIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: '💻', 
      url: 'https://github.com/JuniorSebastian',
      gradient: 'from-gray-700 to-gray-900',
      hoverGlow: 'group-hover:shadow-gray-500/50'
    },
    { 
      name: 'LinkedIn', 
      icon: '�', 
      url: 'https://www.linkedin.com/in/juniorsebastian/',
      gradient: 'from-blue-600 to-blue-700',
      hoverGlow: 'group-hover:shadow-blue-500/50'
    },
  ];

  const quickLinks = [
    { name: 'Inicio', url: '#inicio' },
    { name: 'Funcionalidades', url: '#funcionalidades' },
    { name: 'Testimonios', url: '#testimonios' },
    { name: 'Contacto', url: '#contacto' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 text-white py-20 px-6 overflow-hidden">
      {/* Efectos de fondo mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
        
        {/* Grid decorativo */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0891b220_1px,transparent_1px),linear-gradient(to_bottom,#0891b220_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <motion.div 
                  className="relative bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-600 p-3 rounded-xl shadow-lg"
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <SparklesIcon className="w-7 h-7 text-white" />
                </motion.div>
              </div>
              <div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  TecCreate
                </h3>
                <p className="text-xs text-cyan-300 font-bold tracking-wide">✨ Powered by AI</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 text-base">
              Transforma tus ideas en presentaciones profesionales con inteligencia artificial de última generación.
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-300 bg-cyan-900/30 px-4 py-2 rounded-lg border border-cyan-500/30">
              <MapPinIcon className="w-5 h-5 text-cyan-400" />
              <span className="font-semibold">TECSUP, Lima - Perú</span>
            </div>
          </motion.div>

          {/* Columna 2: Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <CodeBracketIcon className="w-5 h-5 text-cyan-400" />
              Navegación
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3: Recursos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2 text-cyan-300">
              <DocumentTextIcon className="w-6 h-6 text-cyan-400" />
              Recursos
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://docs.google.com/document/d/1TjcS1w0mx5UJmLtiwijjZ-3vPRD1cX54ci14w_6xWK0/edit?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center gap-3 group hover:translate-x-2"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                  <DocumentTextIcon className="w-5 h-5 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium">Documentación</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://groq.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center gap-3 group hover:translate-x-2"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                  <CommandLineIcon className="w-5 h-5 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium">API</span>
                </a>
              </li>
              <li>
                <a 
                  href="/soporte"
                  className="text-gray-300 hover:text-cyan-300 transition-all duration-300 flex items-center gap-3 group hover:translate-x-2"
                >
                  <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
                  <ChatBubbleLeftRightIcon className="w-5 h-5 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
                  <span className="font-medium">Soporte</span>
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Columna 4: Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-6 text-cyan-300">Síguenos</h4>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-3 px-5 py-4 bg-gradient-to-br ${social.gradient} backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-400/50 transition-all duration-300 group shadow-lg ${social.hoverGlow}`}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.span 
                    className="text-3xl"
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    {social.icon}
                  </motion.span>
                  <div className="flex-1">
                    <span className="text-base font-bold text-white group-hover:text-cyan-200 transition-colors block">
                      {social.name}
                    </span>
                    <span className="text-xs text-gray-300 group-hover:text-cyan-300 transition-colors">
                      Seguir
                    </span>
                  </div>
                  <svg className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.a>
              ))}
            </div>
            
            {/* Card decorativa con stats */}
            <motion.div 
              className="mt-6 p-5 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-xl backdrop-blur-sm relative overflow-hidden group"
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/10 to-cyan-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <div className="relative z-10">
                <p className="text-sm text-cyan-300 mb-3 font-bold flex items-center gap-2">
                  <SparklesIcon className="w-5 h-5" />
                  Estado del servicio
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </div>
                  <span className="text-sm font-semibold text-white">Todos los sistemas operativos</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Línea divisoria mejorada */}
        <div className="relative h-px mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent blur-sm" />
        </div>

        {/* Footer inferior mejorado */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 text-gray-400">
            <p className="text-sm font-medium">
              © {currentYear} <span className="text-cyan-400 font-bold">TecCreate</span>. Todos los derechos reservados.
            </p>
          </div>

          <div className="flex items-center gap-2 text-gray-300 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 px-4 py-2 rounded-lg border border-cyan-500/20">
            <p className="text-sm flex items-center gap-2">
              Hecho con
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <HeartIcon className="w-4 h-4 text-red-400" />
              </motion.div>
              por
              <span className="font-bold text-cyan-300">TECSUP</span>
            </p>
          </div>

          <div className="flex gap-4 text-sm">
            <button className="text-gray-400 hover:text-cyan-300 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">
              Privacidad
            </button>
            <span className="text-cyan-600">•</span>
            <button className="text-gray-400 hover:text-cyan-300 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">
              Términos
            </button>
            <span className="text-cyan-600">•</span>
            <button className="text-gray-400 hover:text-cyan-300 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">
              Cookies
            </button>
          </div>
        </motion.div>
      </div>

      {/* CSS Animations mejoradas */}
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(30px, -60px) scale(1.15); }
          50% { transform: translate(-30px, 30px) scale(0.95); }
          75% { transform: translate(30px, 30px) scale(1.08); }
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-blob { animation: blob 8s infinite ease-in-out; }
        .animate-gradient { animation: gradient 3s ease infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </footer>
  );
}
