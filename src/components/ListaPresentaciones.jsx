import React, { useEffect, useState } from 'react';
import {
  obtenerMisPresentaciones,
  eliminarPresentacion,
  actualizarPresentacion
} from '../services/api';
import PresentacionCard from './PresentacionCard';
import NuevaPresentacion from './NuevaPresentacion';

const ListaPresentaciones = () => {
  const [presentaciones, setPresentaciones] = useState([]);
  const [loading, setLoading] = useState(true);

  const cargar = async () => {
    try {
      setLoading(true);
      const res = await obtenerMisPresentaciones(); // ✅ Usa API centralizada
      setPresentaciones(res.data || []);
    } catch (err) {
      console.error('Error al cargar presentaciones:', err);
      setPresentaciones([]);
    } finally {
      setLoading(false);
    }
  };

  const eliminar = async (id) => {
    const confirmar = window.confirm('¿Eliminar esta presentación?');
    if (!confirmar) return;

    try {
      await eliminarPresentacion(id);
      cargar();
    } catch (err) {
      console.error('Error al eliminar:', err);
      alert('No se pudo eliminar');
    }
  };

  const editar = async (presentacion) => {
    const nuevoTitulo = prompt('Nuevo título:', presentacion.titulo);
    const nuevoContenido = prompt('Nuevo contenido:', presentacion.contenido);

    if (!nuevoTitulo || !nuevoContenido) return;

    try {
      await actualizarPresentacion(presentacion.id, {
        titulo: nuevoTitulo,
        contenido: nuevoContenido
      });
      cargar();
    } catch (err) {
      console.error('Error al editar:', err);
      alert('No se pudo actualizar');
    }
  };

  useEffect(() => {
    cargar();
  }, []);

  return (
    <div className="space-y-5 sm:space-y-6 lg:space-y-8">
      <NuevaPresentacion onCreada={cargar} />
      {loading ? (
        <div className="py-12 sm:py-16 lg:py-20 text-center">
          <div className="inline-flex flex-col items-center gap-3 sm:gap-4">
            <div className="relative">
              <div className="w-14 h-14 sm:w-16 sm:h-16 border-4 border-cyan-200 border-t-cyan-500 rounded-full animate-spin" />
              <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin animation-delay-150" />
            </div>
            <p className="text-gray-600 font-semibold text-sm sm:text-base">Cargando presentaciones...</p>
          </div>
        </div>
      ) : (
        <>
          {presentaciones.length === 0 ? (
            <div className="py-12 sm:py-16 lg:py-20 px-4">
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-cyan-900 mb-2 text-base sm:text-lg lg:text-xl">📋 No tienes presentaciones creadas</h3>
                  <p className="text-cyan-700 text-xs sm:text-sm lg:text-base">
                    Crea tu primera presentación usando el botón de arriba para comenzar.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
              {presentaciones.map((p) => (
                <PresentacionCard
                  key={p.id}
                  presentacion={p}
                  onEliminar={eliminar}
                  onEditar={editar}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ListaPresentaciones;
