import React from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import Jumbotron from '../components/Jumbotron';
import AboutUs from '../components/AboutUs';
import Members from '../components/Members';

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <Jumbotron />
      <AboutUs />
      <Members />
    </DefaultLayout>
  );
};

export default Home;
