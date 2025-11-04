// src/components/Hero.jsx - DISEÑO PROFESIONAL TECCREATE
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCheck, FiZap, FiClock, FiDollarSign } from 'react-icons/fi';
import { HiSparkles } from 'react-icons/hi';
import { IoRocketSharp } from 'react-icons/io5';

const Hero = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '5min', label: 'Tiempo Promedio', icon: FiClock },
    { number: '70%', label: 'Ahorro', icon: FiZap },
    { number: '100%', label: 'Gratis', icon: FiDollarSign },
  ];

  const features = [
    'Temas por carrera TECSUP',
    'Plantillas educativas incluidas',
    'Listo en 5 minutos'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-20">
      
      {/* Grid sutil */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e918_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e918_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"
      />

      {/* Gradientes suaves */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"></div>
      </div>

      {/* Círculos flotantes suaves */}
      <div className="hero-circles">
        <div className="hero-circle hero-circle-1 bg-gradient-to-br from-cyan-300/10 to-blue-400/10"></div>
        <div className="hero-circle hero-circle-2 bg-gradient-to-br from-blue-300/10 to-indigo-400/10"></div>
        <div className="hero-circle hero-circle-3 bg-gradient-to-br from-indigo-300/10 to-cyan-400/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        
        {/* Logo TecCreate Profesional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/80 backdrop-blur-sm border border-cyan-200 rounded-xl shadow-lg relative overflow-hidden group">
            <HiSparkles className="w-5 h-5 text-cyan-600" />
            <span className="text-xl font-bold text-gray-800 tracking-wide relative">TecCreate</span>
            <IoRocketSharp className="w-5 h-5 text-cyan-600" />
          </div>
        </motion.div>

        {/* Título ENGANCHADOR */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[1.1] tracking-tight px-4 sm:px-0"
        >
          <span className="block text-gray-900 mb-4">
            Adiós noches sin dormir
          </span>
          <span className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            haciendo PPTs
          </span>
          <span className="block text-gray-700 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4 font-bold">
            La IA las crea en 5 minutos
          </span>
        </motion.h1>

        {/* Descripción ENGANCHADORA */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-10 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed font-medium"
        >
          Especial para estudiantes TECSUP • Contenido por tu carrera • 100% Gratis
        </motion.p>

        {/* Features Profesionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 px-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-all group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.03, y: -3 }}
            >
              <FiCheck className="w-5 h-5 text-cyan-600 flex-shrink-0" />
              <span className="text-sm sm:text-base font-semibold text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs Profesionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 px-4"
        >
          <motion.button
            onClick={() => navigate('/login')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex items-center gap-2 justify-center">
              <IoRocketSharp className="w-5 h-5" />
              Crear mi primera PPT gratis
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold text-base rounded-xl hover:border-cyan-600 hover:text-cyan-700 hover:shadow-lg transition-all"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver plantillas
          </motion.button>
        </motion.div>

        {/* Stats Cards Profesionales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg group-hover:shadow-xl group-hover:border-cyan-300 transition-all">
                  <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600 mb-3 mx-auto" />
                  <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-600">
                    {stat.label}
                  </div>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
              </motion.div>
            );
          })}
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
