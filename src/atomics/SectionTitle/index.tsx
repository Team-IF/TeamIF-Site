import React from 'react';
import styled from 'styled-components';

const TitleStyle = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

const SectionTitle: React.FC = ({ children }) => {
  return <TitleStyle>{children}</TitleStyle>;
};

export default SectionTitle;
