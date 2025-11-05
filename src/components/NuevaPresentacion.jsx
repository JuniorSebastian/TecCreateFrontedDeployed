import React, { useState } from 'react';
import { crearPresentacion } from '../services/api'; // ✅ Usa la función de API centralizada

const NuevaPresentacion = ({ onCreada }) => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo.trim() || !contenido.trim()) {
      return alert('Completa todos los campos');
    }

    try {
      setCargando(true);

      // ✅ Construye la nueva presentación
      const nueva = {
        titulo,
        contenido: JSON.stringify([contenido]) // Puedes ajustarlo si usas estructura diferente
      };

      await crearPresentacion(nueva); // ✅ Usa axiosInstance con token incluido

      if (onCreada) onCreada();

      // Limpia formulario
      setTitulo('');
      setContenido('');
      alert('Presentación creada con éxito');
    } catch (error) {
      console.error('Error al crear presentación:', error);
      alert('Ocurrió un error al crear la presentación');
    } finally {
      setCargando(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative group bg-white/80 backdrop-blur-xl shadow-2xl p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl space-y-4 sm:space-y-5 lg:space-y-6 border border-cyan-100/50 hover:border-cyan-200/70 transition-all duration-300 overflow-hidden"
    >
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
      
      <div className="relative">
        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 lg:mb-6">
          <div className="p-2 sm:p-2.5 lg:p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl sm:rounded-2xl shadow-lg">
            <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
            Nueva Presentación
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
              Título
            </label>
            <input
              type="text"
              placeholder="Escribe el título de tu presentación..."
              className="w-full p-3 sm:p-3.5 lg:p-4 border-2 border-cyan-200/50 rounded-xl sm:rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm sm:text-base transition-all duration-200 bg-white/80 backdrop-blur-sm"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">
              Contenido
            </label>
            <textarea
              placeholder="Describe el contenido de tu presentación..."
              className="w-full p-3 sm:p-3.5 lg:p-4 border-2 border-cyan-200/50 rounded-xl sm:rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] text-sm sm:text-base transition-all duration-200 bg-white/80 backdrop-blur-sm resize-none"
              value={contenido}
              onChange={(e) => setContenido(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={cargando}
            className="w-full inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3.5 rounded-xl sm:rounded-2xl text-sm sm:text-base lg:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg"
          >
            {cargando ? (
              <>
                <svg className="animate-spin w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Creando...</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Crear Presentación</span>
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default NuevaPresentacion;
