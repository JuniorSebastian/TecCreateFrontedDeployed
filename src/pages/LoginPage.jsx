import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { iniciarSesionConGoogle } from '../services/api';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { HiSparkles, HiShieldCheck } from 'react-icons/hi';
import { IoRocketSharp } from 'react-icons/io5';
import { FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await iniciarSesionConGoogle();
    } catch (error) {
      console.error('Error en login:', error);
      setIsLoading(false);
    }
  };

  const features = [
    {
      icon: FiClock,
      title: 'Acceso Instantáneo',
      description: 'Inicia sesión en segundos',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      borderColor: 'border-cyan-200',
    },
    {
      icon: HiShieldCheck,
      title: 'Seguro y Protegido',
      description: 'Autenticación verificada',
      gradient: 'from-blue-500/10 to-indigo-500/10',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
      borderColor: 'border-blue-200',
    },
    {
      icon: HiSparkles,
      title: 'IA Avanzada',
      description: 'Presentaciones inteligentes',
      gradient: 'from-indigo-500/10 to-violet-500/10',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-violet-500',
      borderColor: 'border-indigo-200',
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e918_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e918_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      {/* Gradientes suaves ANIMADOS */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-200/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"
          animate={{ 
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-indigo-200/20 rounded-full blur-3xl"
          animate={{ 
            x: [0, 30, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      {/* Botón de volver MEJORADO */}
      <motion.button
        onClick={() => navigate('/')}
        className="absolute top-6 left-6 z-50 flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-cyan-200 rounded-full text-gray-700 font-semibold text-sm hover:bg-white hover:border-cyan-300 hover:text-cyan-700 hover:shadow-lg transition-all duration-300 group"
        whileHover={{ scale: 1.05, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <motion.div
          animate={{ x: [-2, 0, -2] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowLeftIcon className="w-4 h-4" />
        </motion.div>
        Volver al inicio
      </motion.button>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Columna izquierda - Información MEJORADA */}
          <motion.div
            className="space-y-8 lg:pr-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Logo y título */}
            <div className="space-y-6">
              <motion.div
                className="inline-flex items-center gap-4"
                whileHover={{ scale: 1.05 }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div className="relative">
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur-xl opacity-40"
                    animate={{ 
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <div className="relative bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 p-4 rounded-2xl shadow-2xl">
                    <HiSparkles className="w-10 h-10 text-white" />
                  </div>
                </motion.div>
                <div>
                  <motion.h1 
                    className="text-5xl font-black bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    style={{ backgroundSize: "200% 200%" }}
                  >
                    TecCreate
                  </motion.h1>
                  <p className="text-sm text-cyan-600 font-bold">Powered by AI</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring" }}
              >
                <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight text-gray-900">
                  Transforma tus ideas en{' '}
                  <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                    presentaciones increíbles
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  La plataforma de inteligencia artificial diseñada exclusivamente para la comunidad
                  <span className="font-bold text-cyan-700"> TECSUP</span>. Crea contenido profesional en minutos.
                </p>
              </motion.div>
            </div>

            {/* Features MEJORADOS */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className={`relative flex items-start gap-4 p-5 rounded-2xl bg-white/90 backdrop-blur-sm border ${feature.borderColor} hover:shadow-xl transition-all duration-300 group overflow-hidden`}
                    initial={{ opacity: 0, x: -20, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      delay: 0.6 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />
                    
                    <motion.div 
                      className={`relative flex-shrink-0 w-12 h-12 rounded-xl ${feature.iconBg} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="relative">
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-gray-800 transition-colors">{feature.title}</h3>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Estadísticas MEJORADAS */}
            <motion.div
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, type: "spring" }}
            >
              {[
                { value: '500+', label: 'Usuarios' },
                { value: '2K+', label: 'Presentaciones' },
                { value: '98%', label: 'Satisfacción' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group text-center p-5 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.08, y: -5, rotateY: 5 }}
                  initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ 
                    delay: 1 + index * 0.15,
                    type: "spring",
                    stiffness: 150
                  }}
                  style={{ perspective: 1000 }}
                >
                  {/* Background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <motion.div 
                    className="relative text-3xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1"
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="relative text-xs text-gray-600 font-semibold uppercase tracking-wider group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Columna derecha - Formulario de login */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              {/* Barra superior decorativa */}
              <div className="h-2 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600" />

              <div className="p-8 md:p-12">
                {/* Logo de TECSUP */}
                <motion.div
                  className="mb-8"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  <img
                    src="https://i.ibb.co/Q3JXxDPY/Chat-GPT-Image-13-jun-2025-22-14-04-removebg-preview-Photoroom.png"
                    alt="TecCreate Logo"
                    className="w-48 mx-auto drop-shadow-lg"
                  />
                </motion.div>

                {/* Título */}
                <motion.div
                  className="text-center mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <h2 className="text-3xl font-black text-gray-900 mb-3">
                    ¡Bienvenido de vuelta!
                  </h2>
                  <p className="text-gray-600">
                    Inicia sesión con tu cuenta institucional de{' '}
                    <span className="font-bold text-cyan-700">TECSUP</span>
                  </p>
                </motion.div>

                {/* Botón de Google MEJORADO */}
                <motion.button
                  onClick={handleGoogleLogin}
                  disabled={isLoading}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="group relative w-full overflow-hidden bg-white border-2 border-gray-200 hover:border-cyan-400 text-gray-700 font-bold py-5 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-cyan-500/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.03, y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, type: "spring" }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    initial={{ x: '-100%' }}
                    animate={{ x: isHovering && !isLoading ? '200%' : '-100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Background gradient on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovering && !isLoading ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />

                  <span className="relative flex items-center justify-center gap-3 text-lg">
                    {isLoading ? (
                      <>
                        <motion.div
                          className="w-6 h-6 border-3 border-cyan-500 border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                        <span>Iniciando sesión...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.4-5.7 7.5-10.6 7.5-6.2 0-11.3-5-11.3-11.2S18.5 13 24.7 13c2.9 0 5.5 1.1 7.4 2.9l5.7-5.7C34 6.3 29.7 4.5 24.7 4.5 13.5 4.5 4.5 13.5 4.5 24.7S13.5 45 24.7 45c10.6 0 20.1-8.2 20.1-20 0-1.6-.2-2.8-.5-4.5z"
                          />
                          <path
                            fill="#FF3D00"
                            d="M6.3 14.6l6.6 4.8c1.8-3.5 5.3-6.1 9.4-6.6V4.5c-6.4.6-11.8 4.5-16 10.1z"
                          />
                          <path
                            fill="#4CAF50"
                            d="M24.7 45c5 0 9.6-1.6 13.2-4.3l-6.1-5.1c-2.2 1.5-5 2.4-8 2.4-4.9 0-9-3.1-10.6-7.5l-6.5 5c3.9 5.6 10.2 9.5 17.5 9.5z"
                          />
                          <path
                            fill="#1976D2"
                            d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.3 5.6l6.1 5.1c.4-.4 7-5.3 7-15.2 0-1.6-.2-2.8-.5-4.5z"
                          />
                        </svg>
                        <span>Iniciar sesión con Google</span>
                        <motion.div
                          animate={{ y: [0, -3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <IoRocketSharp className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        </motion.div>
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Nota de seguridad */}
                <motion.div
                  className="mt-8 p-4 bg-cyan-50 border border-cyan-200 rounded-xl group hover:bg-cyan-100/50 transition-colors"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, type: "spring" }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-start gap-3">
                    <motion.div
                      className="p-1.5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex-shrink-0"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <HiShieldCheck className="w-5 h-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 mb-1">
                        Acceso exclusivo TECSUP
                      </p>
                      <p className="text-xs text-gray-700">
                        Solo usuarios con correos{' '}
                        <span className="font-bold text-cyan-700">@tecsup.edu.pe</span> pueden acceder.
                        Tu información está protegida.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Características adicionales */}
                <motion.div
                  className="mt-8 grid grid-cols-3 gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  {[
                    { icon: IoRocketSharp, text: 'Rápido', color: 'from-cyan-500 to-blue-500', bg: 'bg-cyan-50', hover: 'hover:bg-cyan-100' },
                    { icon: HiShieldCheck, text: 'Seguro', color: 'from-blue-500 to-indigo-500', bg: 'bg-blue-50', hover: 'hover:bg-blue-100' },
                    { icon: HiSparkles, text: 'Fácil', color: 'from-indigo-500 to-purple-500', bg: 'bg-indigo-50', hover: 'hover:bg-indigo-100' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className={`text-center p-3 ${item.bg} ${item.hover} rounded-xl transition-all group`}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.05, y: -3 }}
                    >
                      <motion.div
                        className={`inline-flex p-2 bg-gradient-to-br ${item.color} rounded-lg mb-2`}
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <item.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div className="text-xs font-bold text-gray-700">{item.text}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Decoración flotante */}
            <motion.div
              className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full blur-2xl"
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
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-indigo-400 to-blue-500 rounded-full blur-2xl"
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
          </motion.div>
        </div>
      </div>
    </div>
  );
}
