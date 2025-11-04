// src/components/Features.jsx - VERSIÓN MEJORADA
import React from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  PaintBrushIcon,
  UserGroupIcon,
  BoltIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: <SparklesIcon className="w-8 h-8" />,
      title: 'Creación con IA',
      description: 'Genera presentaciones profesionales automáticamente con inteligencia artificial avanzada.',
      stat: '10x',
      statLabel: 'Más rápido',
      gradient: 'from-red-500 to-red-600',
      glowColor: 'red',
    },
    {
      icon: <PaintBrushIcon className="w-8 h-8" />,
      title: 'Diseño Profesional',
      description: 'Plantillas modernas y elegantes diseñadas por expertos, listas para impresionar.',
      stat: '50+',
      statLabel: 'Plantillas',
      gradient: 'from-blue-900 to-blue-950',
      glowColor: 'blue',
    },
    {
      icon: <UserGroupIcon className="w-8 h-8" />,
      title: 'Colaboración TECSUP',
      description: 'Trabaja en equipo en tiempo real con tus compañeros y profesores de TECSUP.',
      stat: '100%',
      statLabel: 'Sincronizado',
      gradient: 'from-green-500 to-green-600',
      glowColor: 'green',
    },
    {
      icon: <BoltIcon className="w-8 h-8" />,
      title: 'Velocidad Extrema',
      description: 'Crea, edita y presenta en segundos. Sin demoras, sin complicaciones.',
      stat: '<3s',
      statLabel: 'Generación',
      gradient: 'from-red-600 to-red-700',
      glowColor: 'red',
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: 'Seguro y Privado',
      description: 'Tus datos están protegidos con encriptación de nivel empresarial.',
      stat: '256-bit',
      statLabel: 'Encriptación',
      gradient: 'from-green-600 to-green-700',
      glowColor: 'green',
    },
    {
      icon: <ArrowPathIcon className="w-8 h-8" />,
      title: 'Actualizaciones Continuas',
      description: 'Nuevas funciones y mejoras cada mes basadas en tus sugerencias.',
      stat: '24/7',
      statLabel: 'Disponible',
      gradient: 'from-blue-900 to-slate-900',
      glowColor: 'blue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-green-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Encabezado de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-50 to-red-100 border border-red-200/50 rounded-full mb-6"
          >
            <SparklesIcon className="w-5 h-5 text-red-600" />
            <span className="text-sm font-bold text-red-700 uppercase tracking-wider">
              Funcionalidades Destacadas
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Todo lo que necesitas para
            <span className="block mt-2 bg-gradient-to-r from-red-600 via-blue-900 to-green-600 bg-clip-text text-transparent">
              Presentaciones Increíbles
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Herramientas poderosas diseñadas específicamente para estudiantes y profesores de TECSUP
          </p>
        </motion.div>

        {/* Grid de tarjetas de funcionalidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group relative"
            >
              {/* Efecto de brillo al hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-25 transition-opacity duration-500`}></div>

              {/* Card principal */}
              <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:shadow-2xl hover:shadow-gray-300/50 transition-all duration-500 overflow-hidden">
                {/* Gradiente decorativo superior */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient}`}></div>

                {/* Badge de estadística */}
                <div className={`absolute top-6 right-6 px-3 py-1.5 bg-gradient-to-r ${feature.gradient} rounded-full shadow-lg`}>
                  <div className="text-xs font-black text-white text-center">
                    <div>{feature.stat}</div>
                    <div className="text-[9px] opacity-90">{feature.statLabel}</div>
                  </div>
                </div>

                {/* Icono */}
                <motion.div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} text-white mb-6 shadow-lg shadow-${feature.glowColor}-500/30 group-hover:shadow-2xl group-hover:shadow-${feature.glowColor}-500/50 transition-all duration-500`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                >
                  {feature.icon}
                </motion.div>

                {/* Título */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-red-600 group-hover:to-blue-900 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {feature.description}
                </p>

                {/* Botón "Saber más" */}
                <motion.button
                  onClick={() => (window.location.href = '/login')}
                  className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${feature.gradient} text-white font-bold rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300`}
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Saber más</span>
                  <motion.svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>

                {/* Patrón decorativo de fondo */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                  <svg viewBox="0 0 100 100" fill="currentColor" className={`text-${feature.glowColor}-600`}>
                    <circle cx="50" cy="50" r="40" />
                    <circle cx="30" cy="30" r="20" />
                    <circle cx="70" cy="70" r="15" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-10 bg-gradient-to-br from-red-50 via-gray-50 to-red-100 rounded-3xl border border-red-100 shadow-xl">
            <h3 className="text-2xl sm:text-3xl font-black text-gray-900">
              ¿Listo para crear tu primera presentación?
            </h3>
            <motion.button
              onClick={() => (window.location.href = '/login')}
              className="px-10 py-5 bg-gradient-to-r from-red-500 via-red-600 to-red-700 text-white font-bold rounded-2xl text-lg shadow-2xl shadow-red-600/50"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                <SparklesIcon className="w-6 h-6" />
                Comenzar Ahora Gratis
              </span>
            </motion.button>
            <p className="text-sm text-gray-600">
              ✨ No se requiere tarjeta de crédito • 🚀 Empieza en segundos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
