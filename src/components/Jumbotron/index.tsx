import React from 'react';
import styled from 'styled-components';
import background from '../../assets/images/background/backgroundFlow.jpg';
import BackgroundSection from '../../atomics/BackgroundSection';

const BackgroundSectionStyle = styled(BackgroundSection)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleStyle = styled.p`
  font-size: 3rem;
  text-align: center;
  color: white;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }

  & span {
    font-weight: bold;
  }
`;

const SubTitleStyle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: white;
`;

const Jumbotron: React.FC = () => {
  return (
    <BackgroundSectionStyle id="home" background={background}>
      <div>
        <TitleStyle>
          We Make <span>IF</span> to <span>Reality</span>, <span>Dream</span> to <span>Action</span>
        </TitleStyle>
        <SubTitleStyle>청소년 개발 팀 Team IF 입니다.</SubTitleStyle>
      </div>
    </BackgroundSectionStyle>
  );
};

export default Jumbotron;
