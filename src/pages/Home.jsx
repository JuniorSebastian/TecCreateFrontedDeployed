import React from 'react';
import ListaPresentaciones from '../components/ListaPresentaciones';

const Home = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-cyan-600 via-blue-600 to-blue-600 bg-clip-text text-transparent">
        Tus Presentaciones
      </h2>
      <ListaPresentaciones />
    </div>
  );
};

export default Home;
