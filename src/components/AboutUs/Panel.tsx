import React from 'react';
import styled from 'styled-components';

const PanelStyle = styled.div`
  margin: auto 4rem;
  text-align: center;

  @media screen and (max-width: 720px) {
    margin: 1.5rem auto;
  }
`;

const Panel: React.FC = ({ children }) => {
  return <PanelStyle>{children}</PanelStyle>;
};

export default Panel;
