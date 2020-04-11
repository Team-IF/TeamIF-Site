import React from 'react';
import styled from 'styled-components';
import background from '../../assets/images/background.jpg';

const JumbotronBackgroundStyle = styled.div`
  background-image: url(${background});
  min-height: calc(100vh - 4.9em);
  min-width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Jumbotron: React.FC = () => {
  return (
    <JumbotronBackgroundStyle className="flex bg-blue-500 min-h-full justify-center items-center bg-fixed">
      <p className="text-5xl text-center text-white">
        We Make <span className="font-bold">IF</span> to <span className="font-bold">Reality</span>,{' '}
        <span className="font-bold">Dream</span> to <span className="font-bold">Action</span>
      </p>
    </JumbotronBackgroundStyle>
  );
};

export default Jumbotron;
