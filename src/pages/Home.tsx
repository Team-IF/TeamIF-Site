import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Jumbotron from '../components/Jumbotron';
import AboutAs from '../components/AboutAs';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Jumbotron />
      <AboutAs />
    </DefaultLayout>
  );
};

export default Home;
