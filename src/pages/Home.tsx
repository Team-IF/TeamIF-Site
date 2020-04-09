import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Jumbotron from '../components/Jumbotron';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Jumbotron />
    </DefaultLayout>
  );
};

export default Home;
