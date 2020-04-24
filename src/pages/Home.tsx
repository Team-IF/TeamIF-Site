import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Jumbotron from '../components/Jumbotron';
import AboutUs from '../components/AboutUs';
import Members from '../components/Members';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <ReactFullpage
        licensekey="aN5yBGO^s8"
        scrollingSpeed={800}
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Jumbotron />
            </div>
            <div className="section">
              <AboutUs />
            </div>
            <div className="section">
              <Members />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
};

export default Home;
