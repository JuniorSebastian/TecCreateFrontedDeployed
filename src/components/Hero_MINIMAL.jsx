// src/components/Hero.jsx - MINIMALISTA Y PROFESIONAL
import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  SparklesIcon, 
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
      
      {/* Grid sutil */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f9ff_1px,transparent_1px),linear-gradient(to_bottom,#f0f9ff_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40"></div>

      {/* Gradiente suave de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-cyan-100/40 via-blue-50/20 to-transparent rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-20 text-center">
        
        {/* Badge minimalista */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full mb-8"
        >
          <SparklesIcon className="w-4 h-4 text-cyan-600" />
          <span className="text-sm font-medium text-cyan-700">Plataforma Oficial TECSUP</span>
        </motion.div>

        {/* Título limpio */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Crea presentaciones{' '}
          <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
            increíbles
          </span>
          <br />con inteligencia artificial
        </motion.h1>

        {/* Descripción simple */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          La forma más rápida de crear presentaciones profesionales. 
          Diseñado para estudiantes y profesores de TECSUP.
        </motion.p>

        {/* Features list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-10"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700">
              <CheckCircleIcon className="w-5 h-5 text-cyan-600" />
              <span className="text-sm font-medium">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* CTAs limpios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button
            onClick={() => navigate('/login')}
            className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-xl hover:scale-105 transition-all"
          >
            <span className="flex items-center gap-2 justify-center">
              Comenzar gratis
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
          
          <button
            onClick={() => document.getElementById('funcionalidades')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg hover:border-cyan-300 hover:bg-cyan-50/50 transition-all"
          >
            Ver funcionalidades
          </button>
        </motion.div>

        {/* Stats minimalistas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 border-t border-gray-200"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
