import React from 'react';
import './App.css';
import { ResourcesProvider } from './context/ResourcesCtx';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './components/Routes';

function App() {
  return (
    <ResourcesProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ResourcesProvider>
  );
}

export default App;
