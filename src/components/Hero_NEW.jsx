// src/components/Hero.jsx - VERSIÓN MEJORADA
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { SparklesIcon, RocketLaunchIcon, ArrowDownIcon, BoltIcon, ChartBarIcon, ShieldCheckIcon } from '@heroicons/react/24/solid';

const Hero = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(err => console.log('Video autoplay prevented:', err));
    }
  }, []);

  const stats = [
    { icon: <BoltIcon className="w-6 h-6" />, number: '500+', label: 'Usuarios Activos', color: 'from-teal-400 to-cyan-400' },
    { icon: <ChartBarIcon className="w-6 h-6" />, number: '2K+', label: 'Presentaciones Creadas', color: 'from-sky-400 to-blue-500' },
    { icon: <ShieldCheckIcon className="w-6 h-6" />, number: '98%', label: 'Satisfacción', color: 'from-purple-400 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const scrollToFeatures = () => {
    document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      {/* Video Background con overlay mejorado */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source
            src="https://videos.pexels.com/video-files/3184465/3184465-hd_1280_720_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/40 via-sky-900/30 to-purple-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-gray-900/50 to-gray-900"></div>
      </div>

      {/* Partículas flotantes mejoradas */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-gradient-to-r from-teal-400 to-sky-500 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Contenido Principal */}
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge Superior */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white font-semibold text-sm mb-8 shadow-2xl"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500"></span>
          </span>
          <span className="bg-gradient-to-r from-teal-300 to-sky-300 bg-clip-text text-transparent">
            ✨ Exclusivo para TECSUP
          </span>
        </motion.div>

        {/* Título Principal con gradiente mejorado */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-tight"
        >
          <span className="block bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
            Crea Presentaciones
          </span>
          <span className="block mt-2">
            <span className="bg-gradient-to-r from-teal-300 via-sky-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
              Asombrosas con IA
            </span>
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          variants={itemVariants}
          className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed font-light"
        >
          Transforma tus ideas en presentaciones profesionales en{' '}
          <span className="text-teal-300 font-semibold">segundos</span>. 
          Diseño inteligente, resultados{' '}
          <span className="text-sky-300 font-semibold">extraordinarios</span>.
        </motion.p>

        {/* Botones CTA mejorados */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16"
        >
          <motion.button
            onClick={() => navigate('/login')}
            className="group relative px-10 py-5 bg-gradient-to-r from-teal-400 via-sky-500 to-purple-600 text-white font-bold rounded-2xl text-lg shadow-2xl shadow-teal-500/50 overflow-hidden"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              <RocketLaunchIcon className="w-6 h-6" />
              Comenzar Ahora
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-teal-400"
              initial={{ x: '100%' }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>

          <motion.button
            onClick={scrollToFeatures}
            className="group px-10 py-5 bg-white/10 backdrop-blur-xl border-2 border-white/30 text-white font-bold rounded-2xl text-lg hover:bg-white/20 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.05, y: -5, borderColor: 'rgba(255, 255, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              <SparklesIcon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              Ver Funcionalidades
            </span>
          </motion.button>
        </motion.div>

        {/* Estadísticas Cards mejoradas */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="relative group"
              whileHover={{ y: -10, scale: 1.05 }}
            >
              {/* Efecto de brillo */}
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300`}></div>
              
              {/* Card */}
              <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-6 text-center shadow-2xl">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br ${stat.color} text-white mb-4 shadow-lg`}>
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-black text-white mb-2 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-gray-300 font-medium text-sm">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Indicador de scroll mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-3 text-white/60"
        >
          <p className="text-sm font-semibold uppercase tracking-wider">Descubre más</p>
          <motion.button
            onClick={scrollToFeatures}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowDownIcon className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Gradiente inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% auto;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
