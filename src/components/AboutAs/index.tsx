import React from 'react';
import Section from '../../atomics/Section';
import Panel from './Panel';
import PanelHeader from '../../atomics/AboutAs/PanelHeader';
import PanelBody from '../../atomics/AboutAs/PanelBody';
import styled from 'styled-components';
import iconBalloon from '../../assets/images/icon/Balloon.png'
import iconPictureFrame from '../../assets/images/icon/PictureFrame.png'
import iconGear from '../../assets/images/icon/Gear.png'

const IconStyle = styled.img`
  height: 40px;
  width: 40px;
  float: left;
  vertical-align: middle
`;

const TextStyle = styled.p`
  font-size: 32px;
  float: right;
`;

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
                <IconStyle src={iconBalloon} />
              </span>{' '}
              <TextStyle>&#160; 우리는 꿈을 꾸며</TextStyle>
            </PanelHeader>
            <PanelBody>가나다라마바사</PanelBody>
          </Panel>

          <Panel>
            <PanelHeader>
              <span role="img" aria-label="PictureFrame">
                <IconStyle src={iconPictureFrame} />
              </span>{' '}
              <TextStyle>&#160; 상상을 이루고</TextStyle>
            </PanelHeader>
            <PanelBody>가나다라마바사</PanelBody>
          </Panel>

          <Panel>
            <PanelHeader>
              <span role="img" aria-label="Gear">
                <IconStyle src={iconGear} />
              </span>{' '}
              <TextStyle>&#160; 현실로 만듭니다</TextStyle>
            </PanelHeader>
            <PanelBody>가나다라마바사</PanelBody>
          </Panel>
        </div>
      </div>
    </Section>
  );
};

export default AboutAs;
