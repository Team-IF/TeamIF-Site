import React from 'react';
import Section from '../../atomics/Section';
import Panel from './Panel';
import PanelHeader from '../../atomics/AboutAs/PanelHeader';
import PanelBody from '../../atomics/AboutAs/PanelBody';
import iconBalloon from '../../assets/images/Balloon.jpg';
import iconPictureFrame from '../../assets/images/PictureFrame.jpg';
import iconGear from '../../assets/images/Gear.jpg';

const AboutAs: React.FC = () => {
  return (
    <Section id="aboutas" className="flex justify-center items-center bg-fixed">
      <div>
        <p className="font-bold lg:text-5xl text-3xl text-center">
          We Are <span className="text-blue-700">Team IF</span>
        </p>
        <p className="font-bold text-3xl text-center">팀 소개</p>

        <div className="flex lg:flex-row flex-col justify-center items-center mt-16">
          <Panel>
            <PanelHeader>
              <span role="img" aria-label="Balloon">
                🎈
              </span>{' '}
              우리는 꿈을 꾸며
            </PanelHeader>
            <PanelBody>가나다라마바</PanelBody>
          </Panel>

          <Panel>
            <PanelHeader>
              <span role="img" aria-label="Drawing">
                🖼
              </span>{' '}
              상상을 이루고
            </PanelHeader>
            <PanelBody>가나다라마바</PanelBody>
          </Panel>

          <Panel>
            <PanelHeader>
              <span role="img" aria-label="Gear">
                ⚙
              </span>{' '}
              현실로 만듭니다
            </PanelHeader>
            <PanelBody>가나다라마바</PanelBody>
          </Panel>
        </div>
      </div>
    </Section>
  );
};

export default AboutAs;
