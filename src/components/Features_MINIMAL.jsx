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
      title: 'Generación con IA',
      description: 'Crea presentaciones completas en segundos. Nuestra IA genera contenido profesional automáticamente.',
    },
    {
      icon: PaintBrushIcon,
      title: 'Diseño Profesional',
      description: 'Más de 50 plantillas modernas diseñadas por expertos. Personaliza colores, fuentes y estilos.',
    },
    {
      icon: UserGroupIcon,
      title: 'Colaboración en Tiempo Real',
      description: 'Trabaja con tu equipo simultáneamente. Comparte, comenta y edita presentaciones juntos.',
    },
    {
      icon: BoltIcon,
      title: 'Rendimiento Rápido',
      description: 'Exporta y presenta sin demoras. Optimizado para proyectos de cualquier tamaño.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Seguridad Avanzada',
      description: 'Encriptación de nivel empresarial. Tus datos están protegidos y respaldados automáticamente.',
    },
    {
      icon: CloudArrowUpIcon,
      title: 'Almacenamiento Cloud',
      description: 'Accede a tus presentaciones desde cualquier dispositivo. Sincronización automática en la nube.',
    },
  ];

  return (
    <section id="funcionalidades" className="relative py-24 lg:py-32 bg-white">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-50 border border-cyan-100 rounded-full mb-6"
          >
            <SparklesIcon className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">Funcionalidades</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Todo lo que necesitas para{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              presentaciones perfectas
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Herramientas potentes diseñadas para estudiantes y profesores de TECSUP
          </motion.p>
        </div>

        {/* Grid de features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-white border border-gray-200 rounded-2xl hover:border-cyan-300 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 p-12 bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-100 rounded-3xl">
            <h3 className="text-3xl font-bold text-gray-900">
              ¿Listo para comenzar?
            </h3>
            <p className="text-gray-600 max-w-md">
              Únete a cientos de estudiantes de TECSUP que ya están creando presentaciones increíbles
            </p>
            <button
              onClick={() => (window.location.href = '/login')}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:shadow-xl hover:scale-105 transition-all"
            >
              Comenzar gratis
            </button>
            <p className="text-sm text-gray-500">
              Sin tarjeta de crédito • Comienza en 30 segundos
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
