import React from 'react';
import Section from '../../atomics/Section';

const AboutAs: React.FC = () => {
  return (
    <Section className="flex justify-center items-center bg-fixed">
      <div>
        <p className="font-bold text-5xl text-center">
          We Are <span className="text-blue-700">Team IF</span>
        </p>
        <p className="text-xl text-center">Team IF를 소개합니다!</p>
      </div>
    </Section>
  );
};

export default AboutAs;
