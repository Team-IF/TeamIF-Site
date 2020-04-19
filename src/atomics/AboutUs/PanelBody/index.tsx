import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
  font-size: 1.2rem;
`;

const PanelBody: React.FC = ({ children }) => {
  return <TextStyle>{children}</TextStyle>;
};

export default PanelBody;
