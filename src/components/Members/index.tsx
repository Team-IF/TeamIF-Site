import React from 'react';
import Section from '../../atomics/Section';
import styled from 'styled-components';

const SectionStyle = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleStyle = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

const Members: React.FC = () => {
  return (
    <SectionStyle id="members">
      <TitleStyle>팀원 소개</TitleStyle>
    </SectionStyle>
  );
};

export default Members;
