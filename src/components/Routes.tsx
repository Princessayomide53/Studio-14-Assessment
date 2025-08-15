import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Routes/Home';
import Toolkit from '../Routes/Toolkit';
import Dashboard from '../Routes/Dashboard';
import Layout from './Layout';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path='/toolkit'
        element={
          <Layout>
            <Toolkit />
          </Layout>
        }
      />
      <Route
        path='/dashboard'
        element={
          <Layout>
            <Dashboard />
          </Layout>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
