import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const PanelHeader: React.FC = ({ children }) => {
  return <TextStyle>{children}</TextStyle>;
};

export default PanelHeader;
