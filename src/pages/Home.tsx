import React from 'react';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
// import DefaultLayout from '../layouts/DefaultLayout';
import Jumbotron from '../components/Jumbotron';
import AboutUs from '../components/AboutUs';
import Members from '../components/Members';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <>
      <NavBar/>
      <ReactFullpage
        licensekey="OPEN-SOURCE-GPLV3-LICENSE"
        scrollingSpeed={1000}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <Jumbotron/>
              </div>
              <div className="section">
                <AboutUs/>
              </div>
              <div className="section">
                <Members/>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
    /* <DefaultLayout>
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
    </DefaultLayout> */
  );
};

export default Home;
