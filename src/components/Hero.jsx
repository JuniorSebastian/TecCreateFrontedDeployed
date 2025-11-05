// src/components/Hero.jsx - DISEÑO PROFESIONAL TECCREATE
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiCheck, FiZap, FiClock, FiDollarSign } from 'react-icons/fi';
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 pt-28">
      
      {/* Grid sutil */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e918_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e918_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"
      />

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

      {/* Círculos flotantes suaves */}
      <div className="hero-circles">
        <div className="hero-circle hero-circle-1 bg-gradient-to-br from-cyan-300/10 to-blue-400/10"></div>
        <div className="hero-circle hero-circle-2 bg-gradient-to-br from-blue-300/10 to-indigo-400/10"></div>
        <div className="hero-circle hero-circle-3 bg-gradient-to-br from-indigo-300/10 to-cyan-400/10"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
        
        {/* Badge Superior CON EFECTOS */}
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm border border-cyan-200 rounded-full mb-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        >
          <motion.span 
            className="text-2xl"
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            ⚡
          </motion.span>
          <span className="text-sm font-bold text-gray-700 group-hover:text-cyan-600 transition-colors">Inspirado en la innovación educativa de TECSUP</span>
        </motion.div>

        {/* Título IMPACTANTE CON EFECTOS */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 leading-[1.1] tracking-tight px-4 sm:px-0"
        >
          <motion.span 
            className="block bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4"
            initial={{ backgroundPosition: "0% 50%" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: "200% 200%" }}
          >
            PPTs automáticas
          </motion.span>
          <motion.span 
            className="block text-gray-900"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            en menos de 5 minutos
          </motion.span>
        </motion.h1>

        {/* Descripción CON BULLET POINTS Y EFECTOS */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileInView={{ scale: [1, 1.02, 1] }}
          viewport={{ once: true }}
          className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto px-4 sm:px-6 leading-relaxed font-medium"
        >
          Solo dinos el tema • La IA genera todo • Gratis
        </motion.p>

        {/* Feature adicional CON EFECTOS */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          className="text-base sm:text-lg text-gray-500 mb-10 font-medium inline-block"
        >
          Plantillas educativas TECSUP incluidas
        </motion.p>

        {/* Features Profesionales CON EFECTOS MEJORADOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
          className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 px-4"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="relative flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg shadow-md hover:shadow-xl hover:border-cyan-300 transition-all duration-300 group overflow-hidden"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.5 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300 rounded-lg" />
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <FiCheck className="w-5 h-5 text-cyan-600 flex-shrink-0 relative z-10" />
              </motion.div>
              <span className="text-sm sm:text-base font-semibold text-gray-700 group-hover:text-gray-900 transition-colors relative z-10">{feature}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs Profesionales CON EFECTOS MEJORADOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 px-4"
        >
          <motion.button
            onClick={() => navigate('/login')}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Shine effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
              initial={{ x: '-100%' }}
              whileHover={{ x: '200%' }}
              transition={{ duration: 0.6 }}
            />
            <span className="relative flex items-center gap-2 justify-center">
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <IoRocketSharp className="w-5 h-5" />
              </motion.div>
              Crear mi primera PPT gratis
            </span>
          </motion.button>
          
          <motion.button
            onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-bold text-base rounded-xl hover:border-cyan-600 hover:text-cyan-700 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Background effect on hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative">Ver plantillas</span>
          </motion.button>
        </motion.div>

        {/* Stats Cards Profesionales CON EFECTOS MEJORADOS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
          className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 1 + index * 0.15,
                  type: "spring",
                  stiffness: 150
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -8,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                style={{ perspective: 1000 }}
              >
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg group-hover:shadow-2xl group-hover:border-cyan-300 transition-all duration-300 overflow-hidden">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
                  >
                    <IconComponent className="relative w-8 h-8 sm:w-10 sm:h-10 text-cyan-600 mb-3 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  </motion.div>
                  
                  <motion.div 
                    className="relative text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}
                  </motion.div>
                  
                  <div className="relative text-xs sm:text-sm font-semibold text-gray-600 group-hover:text-gray-700 transition-colors">
                    {stat.label}
                  </div>
                </div>
                
                {/* Glow effect mejorado */}
                <motion.div 
                  className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
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
