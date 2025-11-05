import React from 'react';

const PresentacionCard = ({ presentacion, onEliminar, onEditar }) => {
  return (
    <div className="group relative animate-fadeIn bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl border border-cyan-100/50 p-4 sm:p-5 lg:p-6 transition-all duration-200 hover:scale-[1.02] overflow-hidden">
      {/* Decorative gradient blobs */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative">
        <h2 className="text-base sm:text-lg lg:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-600 bg-clip-text text-transparent line-clamp-2">
          {presentacion.titulo}
        </h2>
        <p className="text-gray-700 text-xs sm:text-sm mb-2 sm:mb-3 line-clamp-3">{presentacion.contenido}</p>
        <p className="text-gray-400 text-[10px] sm:text-xs mb-3 sm:mb-4 flex items-center gap-1.5">
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Creada el {new Date(presentacion.fecha_creacion).toLocaleString()}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button
            className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            onClick={() => onEditar(presentacion)}
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
            Editar
          </button>
          <button
            className="flex-1 inline-flex items-center justify-center gap-1.5 sm:gap-2 bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            onClick={() => onEliminar(presentacion.id)}
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PresentacionCard;
