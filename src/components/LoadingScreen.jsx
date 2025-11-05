import React from 'react';
import { motion } from 'framer-motion';
import { HiSparkles } from 'react-icons/hi';
import { IoRocketSharp } from 'react-icons/io5';

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Grid de fondo sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#06b6d410_1px,transparent_1px),linear-gradient(to_bottom,#06b6d410_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Gradientes animados de fondo */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/20 rounded-full blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo TecCreate con efectos premium */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 200,
            damping: 20 
          }}
        >
          {/* Glow pulsante detrás del logo */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <motion.img
            src="https://i.ibb.co/Q3JXxDPY/Chat-GPT-Image-13-jun-2025-22-14-04-removebg-preview-Photoroom.png"
            alt="TecCreate Logo"
            className="w-52 md:w-64 drop-shadow-2xl relative z-10"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 2, -2, 0] 
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Sparkles flotantes alrededor del logo */}
          <motion.div
            className="absolute -top-4 -right-4"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <HiSparkles className="w-8 h-8 text-cyan-500" />
          </motion.div>
          
          <motion.div
            className="absolute -bottom-2 -left-4"
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          >
            <HiSparkles className="w-6 h-6 text-blue-500" />
          </motion.div>
        </motion.div>

        {/* Título TecCreate con gradiente animado */}
        <motion.h1
          className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.2 },
            y: { duration: 0.5, delay: 0.2 },
            backgroundPosition: {
              duration: 5,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          style={{ backgroundSize: '200% 200%' }}
        >
          TecCreate
        </motion.h1>

        {/* Texto de carga con puntos animados */}
        <motion.div
          className="flex items-center gap-2 text-gray-700 font-semibold text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <span>Cargando tu cuenta</span>
          <motion.div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </motion.div>

        {/* Spinner circular premium */}
        <motion.div
          className="relative w-20 h-20 mb-6"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
        >
          {/* Anillo exterior */}
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-cyan-200"
            style={{ borderTopColor: 'transparent' }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          
          {/* Anillo interior */}
          <motion.div
            className="absolute inset-2 rounded-full border-4 border-blue-300"
            style={{ borderBottomColor: 'transparent' }}
            animate={{ rotate: -360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Glow central */}
          <motion.div
            className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 blur-md"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Icono central */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            <IoRocketSharp className="w-8 h-8 text-cyan-600" />
          </motion.div>
        </motion.div>

        {/* Badge informativo */}
        <motion.div
          className="px-6 py-3 bg-white/90 backdrop-blur-sm border border-cyan-200 rounded-full shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, type: "spring" }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              <HiSparkles className="w-5 h-5 text-cyan-500" />
            </motion.div>
            <span>Preparando tu experiencia</span>
          </div>
        </motion.div>
      </div>

      {/* Decoraciones flotantes */}
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-32 left-32 w-32 h-32 bg-gradient-to-br from-indigo-400/20 to-blue-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </div>
  );
}

