import React from 'react';
import styled from 'styled-components';
import DefaultLayout from '../layouts/DefaultLayout';
import Jumbotron from '../components/Jumbotron';
import AboutUs from '../components/AboutUs';
import Members from '../components/Members';

const ScrollContainer = styled.div`
  max-height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
`;

const ScrollWrapper = styled.div`
  scroll-snap-align: center;
`;

const Home: React.FC = () => {
  return (
    <DefaultLayout>
      <ScrollContainer>
        <ScrollWrapper>
          <Jumbotron />
        </ScrollWrapper>
        <ScrollWrapper>
          <AboutUs />
        </ScrollWrapper>
        <ScrollWrapper>
          <Members />
        </ScrollWrapper>
      </ScrollContainer>
    </DefaultLayout>
  );
};

export default Home;
