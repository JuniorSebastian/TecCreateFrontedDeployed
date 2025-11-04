// src/components/Hero.jsx - DISEÑO IMPACTANTE TECCREATE
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  CheckCircleIcon,
  SparklesIcon,
  RocketLaunchIcon,
  BoltIcon
} from '@heroicons/react/24/outline';

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '5min', label: 'Tiempo Promedio', icon: '⚡' },
    { number: '70%', label: 'Ahorro de Tiempo', icon: '📈' },
    { number: '100%', label: 'Gratis', icon: '🎁' },
  ];

  const features = [
    'Temas por carrera TECSUP',
    'Plantillas profesionales incluidas',
    'Listo en 5 minutos'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 pt-20">
      
      {/* Grid animado brillante */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e933_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e933_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 animate-pulse"
      />

      {/* Gradientes múltiples superpuestos */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Círculos flotantes mejorados */}
      <div className="hero-circles">
        <div className="hero-circle hero-circle-1 bg-gradient-to-br from-cyan-400/20 to-blue-500/20"></div>
        <div className="hero-circle hero-circle-2 bg-gradient-to-br from-blue-400/20 to-purple-500/20"></div>
        <div className="hero-circle hero-circle-3 bg-gradient-to-br from-purple-400/20 to-pink-500/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        
        {/* Logo TecCreate IMPACTANTE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-2xl shadow-2xl shadow-cyan-500/50 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            <SparklesIcon className="w-6 h-6 text-white animate-spin" style={{ animationDuration: '3s' }} />
            <span className="text-2xl font-black text-white tracking-wider relative">TecCreate</span>
            <RocketLaunchIcon className="w-6 h-6 text-white" />
          </div>
        </motion.div>

        {/* Título IMPACTANTE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[1.1] tracking-tight px-4 sm:px-0"
        >
          <span className="block text-white mb-4">
            Crea PPTs increíbles
          </span>
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
            en solo 5 minutos
          </span>
          <span className="block text-cyan-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 font-extrabold">
            ⚡ con IA para TECSUP Lima
          </span>
        </motion.h1>

        {/* Descripción IMPACTANTE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-cyan-100/90 mb-10 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed font-semibold"
        >
          🎯 Plantillas especializadas por carrera • 🎨 Diseño profesional automático • 💰 100% GRATIS
        </motion.p>

        {/* Features LLAMATIVAS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 px-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full shadow-lg hover:bg-white/20 transition-all group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <CheckCircleIcon className="w-6 h-6 text-cyan-300 group-hover:text-cyan-200 transition-colors flex-shrink-0" />
              <span className="text-sm sm:text-base font-bold text-white">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs IMPACTANTES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 px-4"
        >
          <motion.button
            onClick={() => navigate('/login')}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-black text-lg rounded-2xl shadow-2xl shadow-cyan-500/50 overflow-hidden transition-all hover:shadow-cyan-400/70 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            <span className="relative flex items-center gap-3 justify-center">
              <RocketLaunchIcon className="w-6 h-6" />
              CREAR MI PRIMERA PPT GRATIS
              <BoltIcon className="w-6 h-6 animate-bounce" />
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-10 py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver Plantillas ✨
          </motion.button>
        </motion.div>

        {/* Stats IMPACTANTES con glow effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          className="grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto px-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -10 }}
            >
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl group-hover:bg-white/20 group-hover:border-white/40 transition-all">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base font-bold text-cyan-100/80">
                  {stat.label}
                </div>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </motion.div>
          ))}
        </motion.div>

      </div>

      {/* CSS Animations optimizadas */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .hero-circles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        
        .hero-circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%);
          filter: blur(40px);
          will-change: transform;
        }
        
        .hero-circle-1 {
          width: 300px;
          height: 300px;
          left: 20%;
          top: 30%;
          animation: float 20s ease-in-out infinite;
        }
        
        .hero-circle-2 {
          width: 400px;
          height: 400px;
          right: 15%;
          top: 20%;
          animation: float 25s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .hero-circle-3 {
          width: 350px;
          height: 350px;
          left: 50%;
          bottom: 20%;
          animation: float 22s ease-in-out infinite;
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;
