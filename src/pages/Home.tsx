import React from 'react';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import Jumbotron from '../components/Jumbotron';
import AboutUs from '../components/AboutUs';
import Members from '../components/Members';

const Home: React.FC = () => {
  return (
    <ReactFullpage
      licensekey="OPEN-SOURCE-GPLV3-LICENSE"
      scrollingSpeed={800}
      render={() => {
        return (
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
        );
      }}
    />
  );
};

export default Home;
