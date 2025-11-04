// src/components/Header.jsx - VERSIÓN PREMIUM TECSUP CELESTE
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { text: 'Inicio', href: '#inicio', icon: '🏠' },
    { text: 'Funcionalidades', href: '#funcionalidades', icon: '⚡' },
    { text: 'Soporte', href: '/soporte', icon: '💬' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10'
          : 'bg-white/80 backdrop-blur-md shadow-lg'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Premium con animación */}
          <motion.div
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              {/* Glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.75, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              {/* Logo icon */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <SparklesIcon className="w-7 h-7 text-white" />
                </motion.div>
              </div>
            </div>
            
            {/* Logo text */}
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 bg-clip-text text-transparent">
                TecCreate
              </h1>
              <p className="text-xs text-gray-500 font-medium">By TECSUP</p>
            </div>
          </motion.div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="relative px-4 py-2 text-gray-700 hover:text-cyan-600 font-semibold text-sm transition-colors duration-300 group rounded-xl"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-lg">{link.icon}</span>
                  {link.text}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-sky-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  layoutId="navHighlight"
                />
              </motion.a>
            ))}

            {/* Botón CTA Desktop */}
            <motion.a
              href="/login"
              className="ml-4 relative group overflow-hidden px-6 py-2.5 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-white font-bold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <SparklesIcon className="w-4 h-4" />
                Comenzar
              </span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Partículas animadas */}
              <motion.div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [-5, -15],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </motion.a>
          </nav>

          {/* Botón Menú Mobile */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-gradient-to-br from-cyan-50 to-sky-100 text-cyan-600 hover:from-cyan-100 hover:to-sky-200 transition-all duration-300 shadow-md"
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Menú Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-t border-cyan-100"
          >
            <nav className="px-4 py-6 space-y-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-cyan-600 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-sky-100 transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xl">{link.icon}</span>
                    {link.text}
                  </span>
                </motion.a>
              ))}
              
              <motion.a
                href="/login"
                className="block text-center mt-4 px-6 py-3 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 text-white font-bold rounded-full shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  <SparklesIcon className="w-5 h-5" />
                  Comenzar Gratis
                </span>
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Línea decorativa inferior */}
      <motion.div
        className="h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: 'left' }}
      />
    </motion.header>
  );
};

export default Header;
