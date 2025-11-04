// src/components/Header.jsx - MINIMALISTA Y PROFESIONAL
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
    { text: 'Inicio', href: '#inicio' },
    { text: 'Funcionalidades', href: '#funcionalidades' },
    { text: 'Soporte', href: '/soporte' },
  ];

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Simple con animación */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div 
              className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center"
              whileHover={{ rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-black text-sm">TC</span>
            </motion.div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">TecCreate</span>
          </motion.a>

          {/* Nav Desktop con animaciones */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="relative text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.text}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            <motion.a
              href="/login"
              className="relative px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px -5px rgba(6, 182, 212, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              {/* Efecto shine */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
              />
              <span className="relative">Comenzar</span>
            </motion.a>
          </nav>

          {/* Mobile Menu Button con animación */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-cyan-600 rounded-lg hover:bg-cyan-50 transition-colors"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <nav className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-gray-600 hover:text-cyan-600"
                >
                  {link.text}
                </a>
              ))}
              <a
                href="/login"
                className="block text-center py-2 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg mt-4"
              >
                Comenzar
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
