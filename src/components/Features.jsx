// src/components/Features.jsx - MINIMALISTA Y PROFESIONAL
import React from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  PaintBrushIcon,
  UserGroupIcon,
  BoltIcon,
  ShieldCheckIcon,
  CloudArrowUpIcon,
} from '@heroicons/react/24/outline';

const Features = () => {
  const features = [
    {
      icon: SparklesIcon,
      title: 'Generación Inteligente',
      description: 'Crea presentaciones completas con IA avanzada. Contenido relevante y estructurado automáticamente.',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: PaintBrushIcon,
      title: 'Diseño de Calidad',
      description: 'Plantillas profesionales y personalizables. Diseños que destacan tu contenido.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: UserGroupIcon,
      title: 'Trabajo Colaborativo',
      description: 'Edición simultánea en equipo. Comparte y colabora sin límites.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: BoltIcon,
      title: 'Alto Rendimiento',
      description: 'Velocidad optimizada para proyectos de cualquier tamaño. Sin esperas, sin interrupciones.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: ShieldCheckIcon,
      title: 'Seguridad Total',
      description: 'Encriptación empresarial y respaldos automáticos. Tus datos siempre protegidos.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: CloudArrowUpIcon,
      title: 'Acceso Universal',
      description: 'Tus presentaciones en cualquier dispositivo. Sincronización instantánea.',
      color: 'from-rose-500 to-cyan-500'
    },
  ];

  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 rounded-full mb-6 shadow-sm"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-gray-700">Funcionalidades</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Herramientas poderosas para{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              resultados excepcionales
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Tecnología de vanguardia al servicio de tu creatividad
          </motion.p>
        </div>

        {/* Grid de features con animaciones sutiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className="group relative p-8 bg-white rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-300"
                style={{ willChange: 'transform' }}
              >
                <div className="relative">
                  {/* Icono con gradiente único */}
                  <div className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-xl mb-5 shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Indicador sutil en hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final profesional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-24 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 bg-white border border-gray-200 rounded-3xl shadow-lg max-w-3xl">
            <h3 className="text-3xl font-bold text-gray-900">
              ¿Listo para transformar tus presentaciones?
            </h3>
            <p className="text-lg text-gray-600 max-w-xl">
              Únete a miles de usuarios que ya están creando contenido excepcional
            </p>
            <button
              className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Comenzar gratis
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
