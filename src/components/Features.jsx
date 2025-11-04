// src/components/Features.jsx - VERSIÓN PREMIUM TECSUP CELESTE
import React from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  PaintBrushIcon,
  UserGroupIcon,
  BoltIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
  ArrowPathIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: <SparklesIcon className="w-10 h-10" />,
      title: 'Generación con IA',
      description: 'Crea presentaciones completas en segundos con inteligencia artificial de última generación.',
      stat: '10x',
      statLabel: 'Más Rápido',
      gradient: 'from-cyan-400 to-sky-500',
      glowColor: 'cyan',
      iconBg: 'from-cyan-400 to-sky-500',
    },
    {
      icon: <PaintBrushIcon className="w-10 h-10" />,
      title: 'Diseño Profesional',
      description: 'Plantillas modernas y elegantes diseñadas por expertos, optimizadas para TECSUP.',
      stat: '50+',
      statLabel: 'Plantillas',
      gradient: 'from-sky-400 to-blue-500',
      glowColor: 'sky',
      iconBg: 'from-sky-400 to-blue-500',
    },
    {
      icon: <UserGroupIcon className="w-10 h-10" />,
      title: 'Colaboración en Tiempo Real',
      description: 'Trabaja con tu equipo simultáneamente. Comparte, comenta y edita juntos.',
      stat: '100%',
      statLabel: 'Sincronizado',
      gradient: 'from-blue-400 to-cyan-500',
      glowColor: 'blue',
      iconBg: 'from-blue-400 to-cyan-500',
    },
    {
      icon: <BoltIcon className="w-10 h-10" />,
      title: 'Renderizado Ultrarrápido',
      description: 'Exporta y presenta sin demoras. Velocidad optimizada para proyectos grandes.',
      stat: '<3s',
      statLabel: 'Generación',
      gradient: 'from-cyan-500 to-sky-400',
      glowColor: 'cyan',
      iconBg: 'from-cyan-500 to-sky-400',
    },
    {
      icon: <ShieldCheckIcon className="w-10 h-10" />,
      title: 'Seguridad Avanzada',
      description: 'Tus datos están protegidos con encriptación de nivel empresarial y backups automáticos.',
      stat: '256-bit',
      statLabel: 'Encriptación',
      gradient: 'from-sky-500 to-blue-400',
      glowColor: 'sky',
      iconBg: 'from-sky-500 to-blue-400',
    },
    {
      icon: <CloudArrowUpIcon className="w-10 h-10" />,
      title: 'Cloud Storage Ilimitado',
      description: 'Guarda y accede a tus presentaciones desde cualquier dispositivo, en cualquier momento.',
      stat: '∞',
      statLabel: 'Almacenamiento',
      gradient: 'from-blue-500 to-cyan-400',
      glowColor: 'blue',
      iconBg: 'from-blue-500 to-cyan-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32 bg-gradient-to-br from-white via-sky-50 to-cyan-50 overflow-hidden">
      
      {/* Elementos decorativos de fondo - colores celeste */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/2 -right-48 w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Grid pattern sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e0f2fe_1px,transparent_1px),linear-gradient(to_bottom,#e0f2fe_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          
          {/* Badge animado */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-50 to-sky-100 border-2 border-cyan-200 rounded-full mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <SparklesIcon className="w-5 h-5 text-cyan-600" />
            </motion.div>
            <span className="text-sm font-bold text-cyan-700 uppercase tracking-wider">
              Funcionalidades Premium
            </span>
          </motion.div>

          {/* Título con gradiente animado */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6">
            Todo lo que necesitas para
            <motion.span 
              className="block mt-2 bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ['0%', '100%', '0%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{
                backgroundSize: '200% auto',
              }}
            >
              Presentaciones Perfectas
            </motion.span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Herramientas poderosas diseñadas específicamente para estudiantes y profesores de <span className="font-bold text-cyan-600">TECSUP</span>
          </p>
        </motion.div>

        {/* Grid de tarjetas de funcionalidades */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative h-full p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-cyan-100 shadow-xl hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-500 overflow-hidden">
                
                {/* Efecto de brillo en hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5`}></div>
                  <motion.div
                    className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    animate={{ left: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                </motion.div>

                {/* Icono Premium con animación */}
                <motion.div
                  className={`relative w-20 h-20 mb-6 bg-gradient-to-br ${feature.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-white">
                    {feature.icon}
                  </div>
                  
                  {/* Pulso animado */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.iconBg} opacity-75`}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.75, 0, 0.75],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </motion.div>

                {/* Badge de estadística */}
                <div className={`inline-flex items-baseline gap-2 px-4 py-2 bg-gradient-to-r ${feature.gradient} bg-opacity-10 rounded-full mb-4`}>
                  <span className={`text-2xl font-black bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>
                    {feature.stat}
                  </span>
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    {feature.statLabel}
                  </span>
                </div>

                {/* Título */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300">
                  {feature.title}
                </h3>

                {/* Descripción */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {/* Botón de acción */}
                <motion.button
                  className="group/btn w-full py-3 px-6 bg-gradient-to-r from-white to-cyan-50 border-2 border-cyan-200 rounded-xl font-semibold text-gray-700 hover:text-white hover:border-cyan-400 transition-all duration-300 overflow-hidden relative"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Explorar
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowPathIcon className="w-4 h-4" />
                    </motion.div>
                  </span>
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${feature.gradient}`}
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>

                {/* Línea decorativa animada */}
                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${feature.gradient}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                />

                {/* Partículas decorativas */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${feature.gradient}`}
                      style={{
                        right: `${i * 8}px`,
                        top: `${i * 8}px`,
                      }}
                      animate={{
                        y: [-5, -15, -5],
                        opacity: [0.3, 1, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Final Premium */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-24 text-center"
        >
          <div className="relative inline-flex flex-col items-center gap-8 p-12 bg-gradient-to-br from-white via-cyan-50 to-sky-100 rounded-3xl border-2 border-cyan-200 shadow-2xl overflow-hidden">
            
            {/* Fondo animado */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            />

            {/* Icono decorativo */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg"
            >
              <RocketLaunchIcon className="w-10 h-10 text-white" />
              
              {/* Anillo pulsante */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-4 border-cyan-400"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
                ¿Listo para <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">revolucionar</span> tus presentaciones?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                Únete a cientos de estudiantes de TECSUP que ya están creando presentaciones increíbles
              </p>
            </div>

            <motion.button
              onClick={() => (window.location.href = '/login')}
              className="relative px-12 py-5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-white font-bold rounded-2xl text-lg shadow-2xl shadow-cyan-500/50 overflow-hidden group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <SparklesIcon className="w-6 h-6" />
                Comenzar Ahora Gratis
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </span>
              
              {/* Efecto de brillo */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Partículas en el botón */}
              <motion.div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
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
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </motion.div>
            </motion.button>

            <p className="relative z-10 text-sm text-gray-500 flex items-center gap-4">
              <span className="flex items-center gap-2">
                ✨ Sin tarjeta de crédito
              </span>
              <span>•</span>
              <span className="flex items-center gap-2">
                🚀 Comienza en 30 segundos
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
