// src/components/Hero.jsx - MINIMALISTA Y PROFESIONAL
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '5min', label: 'Tiempo Promedio' },
    { number: '70%', label: 'Ahorro de Tiempo' },
    { number: '100%', label: 'Gratis' },
  ];

  const features = [
    'Temas por carrera TECSUP',
    'Plantillas profesionales incluidas',
    'Listo en 5 minutos'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white pt-20">
      
      {/* Grid sutil - SIN animación para mejor performance */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"
      />

      {/* Gradiente suave de fondo - ESTÁTICO para mejor performance */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-cyan-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl opacity-50"
      />

      {/* Círculos flotantes reducidos - Solo 3 con CSS animations */}
      <div className="hero-circles">
        <div className="hero-circle hero-circle-1"></div>
        <div className="hero-circle hero-circle-2"></div>
        <div className="hero-circle hero-circle-3"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
        
        {/* Badge profesional y sutil */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block mb-8"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-cyan-200/50 rounded-full shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-cyan-500 rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-sm font-semibold text-gray-700">Plataforma Educativa TECSUP</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Título limpio - RESPONSIVO */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-[1.1] tracking-tight px-4 sm:px-0"
        >
          Crea presentaciones educativas{' '}
          <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
            en 5 minutos
          </span>
          <br />para tus cursos TECSUP Lima
        </motion.h1>

        {/* Descripción simple - RESPONSIVO */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-3xl mx-auto px-4 sm:px-6 leading-relaxed font-medium"
        >
          Plantillas y temas especializados para todas las carreras de TECSUP. 
          Genera tu PPT con IA en minutos y dedica más tiempo a estudiar.
        </motion.p>

        {/* Features list con stagger - RESPONSIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 px-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-2 text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                  ease: "easeInOut"
                }}
              >
                <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600 flex-shrink-0" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs limpios con animaciones - RESPONSIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4"
        >
          <button
            onClick={() => navigate('/login')}
            className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
          >
            <span className="relative flex items-center gap-2 justify-center text-sm sm:text-base">
              Crear mi primera PPT
              <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button
            onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-white border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:border-cyan-500 hover:text-cyan-700 transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto text-sm sm:text-base"
          >
            Conocer beneficios
          </button>
        </motion.div>

        {/* Stats minimalistas con animación - RESPONSIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-2xl mx-auto pt-6 sm:pt-8 border-t border-gray-200 px-4"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
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
