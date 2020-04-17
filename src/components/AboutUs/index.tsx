import React from 'react';
import styled, { Keyframes } from 'styled-components';
import Panel from './Panel';
import PanelHeader from '../../atomics/AboutUs/PanelHeader';
import PanelBody from '../../atomics/AboutUs/PanelBody';
import iconBalloon from '../../assets/images/icon/Balloon.png';
import iconPictureFrame from '../../assets/images/icon/PictureFrame.png';
import iconGear from '../../assets/images/icon/Gear.png';
import Section from '../../atomics/Section';
import {
  BalloonAnimationA,
  BalloonAnimationB,
  BalloonAnimationC,
} from '../../styles/BalloonAnimation';
import CodeIcon from '../../atomics/Icons/CodeIcon';

const IconStyle = styled.img`
  height: 40px;
  width: 40px;
  margin-top: 4px;
  float: left;
`;

const AnimationWrapper = styled.div<{ animation: Keyframes }>`
  @media screen and (min-width: 1024px) {
    animation: ${(props) => props.animation} ease-in 4s;
    animation-iteration-count: infinite;
  }
`;

const AboutUs: React.FC = () => {
  return (
    <Section id="aboutUs" className="relative flex justify-center items-center bg-fixed overflow-hidden">
      <div className="overflow-hidden mb-10">
        <div>
          <p className="font-bold lg:text-5xl text-3xl text-center">
            We Are <span className="text-blue-700">Team IF</span>
          </p>
          <p className="font-bold text-3xl text-center">팀 소개</p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center items-center lg:mt-16 mt-14 overflow-hidden">
          <AnimationWrapper animation={BalloonAnimationA}>
            <Panel>
              <PanelHeader>
                <IconStyle src={iconBalloon} alt="Balloon" />
                우리는 꿈을 꾸며
              </PanelHeader>
              <PanelBody>We make dreams</PanelBody>
            </Panel>
          </AnimationWrapper>

          <AnimationWrapper animation={BalloonAnimationB}>
            <Panel>
              <PanelHeader>
                <IconStyle src={iconPictureFrame} alt="PictureFrame" />
                &nbsp;상상을 이루고
              </PanelHeader>
              <PanelBody>From imagination,</PanelBody>
            </Panel>
          </AnimationWrapper>

          <AnimationWrapper animation={BalloonAnimationC}>
            <Panel>
              <PanelHeader>
                <IconStyle src={iconGear} alt="Gear" />
                &nbsp;현실로 만듭니다.
              </PanelHeader>
              <PanelBody>Into reality.</PanelBody>
            </Panel>
          </AnimationWrapper>
        </div>
      </div>
      <CodeIcon />
    </Section>
  );
};

export default AboutUs;
