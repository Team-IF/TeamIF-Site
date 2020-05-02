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
import SectionTitle from '../../atomics/SectionTitle';

const IconStyle = styled.img`
  height: 40px;
  width: auto;
  float: left;

  @media screen and (max-width: 720px) {
    height: 30px;
    margin-right: -30px;
    margin-top: 4px;
  }
`;

const AnimationWrapper = styled.div<{ animation: Keyframes }>`
  @media screen and (min-width: 720px) {
    animation: ${(props) => props.animation} ease-in 4s;
    animation-iteration-count: infinite;
  }
`;

const SectionStyle = styled(Section)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BodyStyle = styled.div`
  overflow: hidden;
  @media screen and (min-width: 720px) {
    margin-bottom: 2.5rem;
  }
`;

const TitleStyle = styled.p`
  font-weight: bold;
  font-size: 2.8rem;
  text-align: center;

  @media screen and (max-width: 720px) {
    font-size: 2rem;
  }

  & span {
    color: #2b6cb0;
  }
`;

const PanelListStyle = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  padding-top: 4rem;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    margin-top: 0;
  }
`;

const AboutUs: React.FC = () => {
  return (
    <SectionStyle>
      <BodyStyle>
        <TitleStyle>
          We Are <span>Team IF</span>
        </TitleStyle>
        <SectionTitle>팀 소개</SectionTitle>

        <PanelListStyle>
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
        </PanelListStyle>
      </BodyStyle>
      <CodeIcon />
    </SectionStyle>
  );
};

export default AboutUs;
