import React from 'react';
import styled from 'styled-components';
import background from '../../assets/images/background.jpg';

const JumbotronContainer = styled.section`
  height: calc(100vh - 4.9em);
  width: 100vw;
`;

const BackgroundStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  min-width: 100%;
  z-index: -1;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

const Jumbotron: React.FC = () => {
  return (
    <JumbotronContainer className="flex justify-center items-center bg-fixed">
      <p className="text-5xl text-center text-white">
        We Make <span className="font-bold">IF</span> to <span className="font-bold">Reality</span>,{' '}
        <span className="font-bold">Dream</span> to <span className="font-bold">Action</span>
      </p>
      <BackgroundStyle />
    </JumbotronContainer>
  );
};

export default Jumbotron;
