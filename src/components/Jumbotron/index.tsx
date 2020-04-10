import React from 'react';
import styled from 'styled-components';
import background from '../../assets/images/background.jpg';

const JumbotronStyle = styled.div`
  background-image: url(${background});
  min-height: calc(100vh - 4em);
  min-width: 100%;
  background-repeat: no-repeat;
  background-size : cover;
`;

const Jumbotron: React.FC = () => {
  return (
    <JumbotronStyle className="flex bg-blue-500 min-h-full justify-center items-center bg-fixed">
      <p className="font-bold text-5xl text-center text-white">멋져보이는 말</p>
    </JumbotronStyle>
  );
};

export default Jumbotron;
