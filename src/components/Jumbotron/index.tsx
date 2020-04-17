import React from 'react';
import background from '../../assets/images/background/backgroundFlow.jpg';
import BackgroundSection from '../../atomics/BackgroundSection';

const Jumbotron: React.FC = () => {
  return (
    <BackgroundSection
      className="flex justify-center items-center bg-fixed"
      background={background}
    >
      <div>
        <p className="lg:text-5xl text-3xl text-center text-white">
          We Make <span className="font-bold">IF</span> to{' '}
          <span className="font-bold">Reality</span>, <span className="font-bold">Dream</span> to{' '}
          <span className="font-bold">Action</span>
        </p>
        <p className="text-xl text-center text-white">청소년 개발 팀 Team IF 입니다.</p>
      </div>
    </BackgroundSection>
  );
};

export default Jumbotron;
