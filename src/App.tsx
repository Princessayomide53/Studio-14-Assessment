import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Resources from './components/Resources';
import { ResourcesProvider } from './context/Resources';

function App() {
  return (
    <ResourcesProvider>
      <Nav />
      <Hero />
      <Resources />
    </ResourcesProvider>
  );
}

export default App;
