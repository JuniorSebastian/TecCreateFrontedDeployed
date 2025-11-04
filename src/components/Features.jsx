// src/components/Features.jsx - PROFESIONAL CON REACT-ICONS
import React from 'react';
import { motion } from 'framer-motion';
import { 
  HiSparkles, 
  HiLightningBolt, 
  HiUserGroup, 
  HiShieldCheck 
} from 'react-icons/hi';
import { 
  TbTemplate, 
  TbDevices 
} from 'react-icons/tb';
import { 
  RiShapeLine 
} from 'react-icons/ri';

const Features = () => {
  const features = [
    {
      icon: HiSparkles,
      title: 'IA Educativa',
      description: 'Genera presentaciones académicas adaptadas a tus cursos TECSUP. Contenido educativo optimizado.',
      gradient: 'from-cyan-500/10 to-blue-500/10',
      iconBg: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      iconColor: 'text-cyan-600',
      borderColor: 'border-cyan-200',
      hoverShadow: 'hover:shadow-cyan-500/20'
    },
    {
      icon: TbTemplate,
      title: 'Plantillas Académicas',
      description: 'Diseños profesionales para exposiciones y trabajos. Cumple con estándares educativos.',
      gradient: 'from-blue-500/10 to-indigo-500/10',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-500',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      hoverShadow: 'hover:shadow-blue-500/20'
    },
    {
      icon: HiLightningBolt,
      title: 'Ahorro de Tiempo',
      description: 'Crea tu PPT en minutos, no en horas. Dedica más tiempo a estudiar y menos a diseñar.',
      gradient: 'from-indigo-500/10 to-violet-500/10',
      iconBg: 'bg-gradient-to-br from-indigo-500 to-violet-500',
      iconColor: 'text-indigo-600',
      borderColor: 'border-indigo-200',
      hoverShadow: 'hover:shadow-indigo-500/20'
    },
    {
      icon: HiUserGroup,
      title: 'Trabajo en Equipo',
      description: 'Colabora con compañeros en tiempo real. Ideal para proyectos grupales.',
      gradient: 'from-violet-500/10 to-purple-500/10',
      iconBg: 'bg-gradient-to-br from-violet-500 to-purple-500',
      iconColor: 'text-violet-600',
      borderColor: 'border-violet-200',
      hoverShadow: 'hover:shadow-violet-500/20'
    },
    {
      icon: HiShieldCheck,
      title: 'Gratis para Alumnos',
      description: 'Sin costos ocultos ni suscripciones. Acceso completo para toda la comunidad TECSUP.',
      gradient: 'from-purple-500/10 to-pink-500/10',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      hoverShadow: 'hover:shadow-purple-500/20'
    },
    {
      icon: TbDevices,
      title: 'Multiplataforma',
      description: 'Accede desde cualquier dispositivo. Laptop, tablet o celular, siempre disponible.',
      gradient: 'from-pink-500/10 to-rose-500/10',
      iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-200',
      hoverShadow: 'hover:shadow-pink-500/20'
    },
  ];

  return (
    <section id="funcionalidades" className="relative py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header - RESPONSIVO */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6 shadow-sm"
          >
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-gray-700">Beneficios</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 sm:mb-6 px-4 tracking-tight leading-tight"
          >
            Todo lo que necesitas para{' '}
            <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              destacar en tus cursos
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed font-medium"
          >
            Diseñado específicamente para estudiantes TECSUP. Ahorra tiempo, dinero y esfuerzo en tus presentaciones académicas.
          </motion.p>
        </div>

        {/* Grid de features con animaciones sutiles - RESPONSIVO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
                className={`group relative p-6 sm:p-8 bg-white rounded-2xl shadow-md hover:shadow-2xl border ${feature.borderColor} transition-all duration-300 ${feature.hoverShadow}`}
                style={{ willChange: 'transform' }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* Gradiente de fondo sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                <div className="relative z-10">
                  {/* Icono profesional con gradiente */}
                  <div className="relative mb-5">
                    <div className={`inline-flex p-4 ${feature.iconBg} rounded-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    {/* Glow effect en hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.iconBg.replace('bg-', '')} rounded-xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10`} />
                  </div>
                  
                  <h3 className="text-xl font-extrabold text-gray-900 mb-3 tracking-tight group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-base text-gray-600 leading-relaxed font-medium group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Indicador en hover */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r ${feature.iconBg.replace('bg-', '')} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>

        {/* CTA Final profesional - RESPONSIVO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 sm:mt-20 md:mt-24 text-center px-4"
        >
          <div className="inline-flex flex-col items-center gap-4 sm:gap-6 p-8 sm:p-10 md:p-12 bg-white border border-gray-200 rounded-3xl shadow-lg max-w-3xl w-full">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              ¿Listo para optimizar tu tiempo?
            </h3>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl font-medium leading-relaxed">
              Únete a cientos de estudiantes TECSUP que ya están creando presentaciones de calidad en minutos
            </p>
            <button
              className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto text-sm sm:text-base"
            >
              Empezar ahora gratis
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
