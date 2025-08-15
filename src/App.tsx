import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Resources from './components/Resources';
import { ResourcesProvider } from './context/Resources';
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
