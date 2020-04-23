import React from 'react';
import styled from 'styled-components';

const CircleStyle = styled.div`
  position: relative;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: dodgerblue;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;

  & > .circle-body {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-repeat: no-repeat;
    background-size: cover;
  }

  & > .circle-text {
    position: absolute;
    display: flex;
    background-color: #333333;
    color: white;
    justify-content: center;
    align-items: center;
    opacity: 0;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transition: opacity ease-in-out 0.2s;
  }

  &:hover .circle-text {
    opacity: 1;
  }

  @media screen and (max-width: 720px) {
    width: 5rem;
    height: 5rem;
    margin-right: 0.8rem;
    font-size: 0.8rem;
  }
`;

interface CircleProps {
  readonly profile: string;
}

const Circle: React.FC<CircleProps> = ({ profile, children }) => {
  return (
    <CircleStyle>
      <img className="circle-body" src={profile} alt="profile" />
      <div className="circle-text">{children}</div>
    </CircleStyle>
  );
};

export default Circle;
