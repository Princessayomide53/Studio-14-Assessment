import React from 'react';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Resources from '../components/Resources';
import { useResources } from '../context/Resources';
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
