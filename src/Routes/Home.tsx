import React from 'react';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import { useResources } from '../context/ResourcesCtx';
import Employee from './Employee';

const Home = () => {
  const { role } = useResources();

  if (role === 'employee') {
    return <Employee />;
  }
  return (
    <div>
      <Hero />
      <Resources />
    </div>
  );
};

export default Home;
