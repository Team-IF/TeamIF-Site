import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const IconStyle = styled.div`
  display: flex;
  position: absolute;
  margin-top: 20vh;
  margin-left: 35vw;
  opacity: 20%;
  color: #63b3ed;
  transform: scale(3) rotate(10deg);
  z-index: 2;
`;

const CodeIcon: React.FC = () => {
  return (
    <IconStyle>
      <FontAwesomeIcon icon={faCode} size="10x" />
    </IconStyle>
  );
};

export default CodeIcon;
