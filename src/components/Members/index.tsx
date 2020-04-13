import React from 'react';
import Section from '../../atomics/Section';

const Members: React.FC = () => {
  return (
    <Section id="members" className="flex justify-center items-center bg-fixed">
      <p className="font-bold lg:text-3xl text-3xl text-center">
        팀원 소개
      </p>
    </Section>
  );
};

export default Members;
