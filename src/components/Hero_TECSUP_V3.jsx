// src/components/Hero.jsx - VERSIÓN PREMIUM TECSUP CELESTE
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  SparklesIcon, 
  RocketLaunchIcon, 
  LightBulbIcon, 
  UsersIcon, 
  StarIcon,
  FireIcon,
  BeakerIcon,
  AcademicCapIcon,
  BoltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/solid';

const Hero = () => {
  const navigate = useNavigate();

  // Colores TECSUP CORRECTOS: Celeste brillante, Azul claro, Blanco
  const stats = [
    { 
      icon: <LightBulbIcon />, 
      number: '500+', 
      label: 'Estudiantes TECSUP', 
      gradient: 'from-cyan-400 to-sky-400',
      iconBg: 'bg-gradient-to-br from-cyan-400 to-sky-500'
    },
    { 
      icon: <FireIcon />, 
      number: '2K+', 
      label: 'Presentaciones Creadas', 
      gradient: 'from-sky-400 to-blue-400',
      iconBg: 'bg-gradient-to-br from-sky-400 to-blue-500'
    },
    { 
      icon: <StarIcon />, 
      number: '98%', 
      label: 'Satisfacción', 
      gradient: 'from-blue-400 to-cyan-400',
      iconBg: 'bg-gradient-to-br from-blue-400 to-cyan-500'
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const scrollToFeatures = () => {
    document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-sky-50 to-cyan-100">
      
      {/* Ondas de fondo animadas - Estilo TECSUP */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-300/30 to-sky-400/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '-20%', left: '-10%' }}
        />
        <motion.div
          className="absolute w-[700px] h-[700px] rounded-full bg-gradient-to-br from-blue-300/30 to-cyan-400/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '-20%', right: '-10%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-br from-sky-300/20 to-blue-400/15 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '40%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Partículas flotantes premium con colores celeste */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'bg-cyan-400' : 
              i % 5 === 1 ? 'bg-sky-400' : 
              i % 5 === 2 ? 'bg-blue-400' :
              i % 5 === 3 ? 'bg-cyan-300' :
              'bg-sky-300'
            }`}
            style={{
              width: Math.random() * 8 + 4 + 'px',
              height: Math.random() * 8 + 4 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              filter: 'blur(1.5px)',
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>

      {/* Contenido Principal */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center"
      >
        
        {/* Badge Premium */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-xl border-2 border-cyan-200 rounded-full mb-8 shadow-lg shadow-cyan-500/20"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <SparklesIcon className="w-6 h-6 text-cyan-500" />
          </motion.div>
          <span className="text-sm font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent uppercase tracking-wider">
            ✨ Plataforma Oficial TECSUP
          </span>
        </motion.div>

        {/* Título Principal con animación de gradiente */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight"
        >
          <motion.span 
            className="block mb-3"
            animate={{ 
              backgroundPosition: ['0%', '100%', '0%'],
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #0ea5e9, #06b6d4, #3b82f6, #0ea5e9)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            Crea Presentaciones
          </motion.span>
          <span className="block">
            <span className="bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
              Increíbles con IA
            </span>
          </span>
        </motion.h1>

        {/* Subtítulo mejorado */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          La herramienta más <span className="font-bold text-cyan-600">rápida</span> e{' '}
          <span className="font-bold text-sky-600">inteligente</span> para crear presentaciones{' '}
          <span className="font-bold text-blue-600">profesionales</span> en segundos
        </motion.p>

        {/* Botones CTA Premium */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          {/* Botón Principal */}
          <motion.button
            onClick={() => navigate('/login')}
            className="group relative px-10 py-5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-white font-bold rounded-2xl text-lg overflow-hidden shadow-2xl shadow-cyan-500/50"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <RocketLaunchIcon className="w-6 h-6" />
              Comenzar Ahora Gratis
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Partículas en el botón */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [-10, -30],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.button>

          {/* Botón Secundario */}
          <motion.button
            onClick={scrollToFeatures}
            className="group px-10 py-5 bg-white/80 backdrop-blur-xl border-2 border-cyan-200 text-gray-800 font-bold rounded-2xl text-lg hover:bg-white hover:border-cyan-400 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="flex items-center gap-3">
              <BeakerIcon className="w-6 h-6 text-cyan-600 group-hover:rotate-12 transition-transform duration-300" />
              Ver Funcionalidades
            </span>
          </motion.button>
        </motion.div>

        {/* Stats Cards Premium */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8, scale: 1.03 }}
            >
              <div className="relative p-8 bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-cyan-100 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-500 overflow-hidden">
                
                {/* Glow effect en hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-10`}></div>
                </div>

                {/* Icono Premium */}
                <motion.div
                  className={`relative w-16 h-16 mx-auto mb-4 ${stat.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-8 h-8 text-white">
                    {stat.icon}
                  </div>
                  
                  {/* Brillo animado */}
                  <motion.div
                    className="absolute inset-0 bg-white rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  />
                </motion.div>

                {/* Número */}
                <h3 className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                  {stat.number}
                </h3>

                {/* Label */}
                <p className="text-gray-600 font-semibold text-sm">
                  {stat.label}
                </p>

                {/* Línea decorativa animada */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={scrollToFeatures}
          >
            <span className="text-sm text-gray-500 font-medium group-hover:text-cyan-600 transition-colors">Descubre más</span>
            <motion.div
              className="w-6 h-10 border-2 border-cyan-400 rounded-full flex items-start justify-center p-2"
              whileHover={{ borderColor: '#0ea5e9' }}
            >
              <motion.div
                className="w-1.5 h-1.5 bg-cyan-500 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </motion.div>

      {/* Decoración inferior con ondas */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-20">
          <motion.path
            fill="url(#wave-gradient)"
            fillOpacity="0.3"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
            animate={{
              d: [
                "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,48C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z",
                "M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#0ea5e9" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

    </section>
  );
};

export default Hero;
