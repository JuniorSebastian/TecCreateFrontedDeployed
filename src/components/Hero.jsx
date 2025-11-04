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
    { number: '500+', label: 'Estudiantes' },
    { number: '2K+', label: 'Presentaciones' },
    { number: '98%', label: 'Satisfacción' },
  ];

  const features = [
    'Generación con IA en segundos',
    'Plantillas profesionales',
    'Colaboración en tiempo real'
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-cyan-50/30 to-white pt-20">
      
      {/* Grid sutil animado */}
      <motion.div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem]"
        animate={{ 
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Gradiente suave de fondo con pulso */}
      <motion.div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-cyan-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Círculos flotantes sutiles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

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
              <span className="text-sm font-semibold text-gray-700">Impulsado por IA</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Título limpio con gradiente animado */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Crea presentaciones{' '}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              profesionales
            </span>
            <motion.span
              className="absolute bottom-2 left-0 right-0 h-3 bg-cyan-400/20 -z-10"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
          <br />con inteligencia artificial
        </motion.h1>

        {/* Descripción simple */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Potencia tu creatividad con tecnología de vanguardia. Diseña presentaciones impactantes en minutos, no en horas.
        </motion.p>

        {/* Features list con stagger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
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
                <CheckCircleIcon className="w-5 h-5 text-cyan-600" />
              </motion.div>
              <span className="text-sm font-medium">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs limpios con animaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            onClick={() => navigate('/login')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-shadow"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex items-center gap-2 justify-center">
              Comenzar ahora
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:border-cyan-500 hover:text-cyan-700 transition-all"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Ver funcionalidades
          </motion.button>
        </motion.div>

        {/* Stats minimalistas con animación */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200"
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
                className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
