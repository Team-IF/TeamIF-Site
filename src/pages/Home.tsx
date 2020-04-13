import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Jumbotron from '../components/Jumbotron';
import AboutAs from '../components/AboutAs';
import Members from '../components/Members';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Jumbotron />
      <AboutAs />
      <Members />
    </DefaultLayout>
  );
};

export default Home;
