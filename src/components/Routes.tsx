import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Resources from './Resources';
import Home from '../Routes/Home';
import Toolkit from '../Routes/Toolkit';
import Dashboard from '../Routes/Dashboard';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/resources' element={<Toolkit />} />
      <Route path='/toolkit' element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
