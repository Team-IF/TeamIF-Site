import React from 'react';
import Section from '../../atomics/Section';

const AboutAs: React.FC = () => {
  return (
    <Section className="flex justify-center items-center bg-fixed">
      <div>
        <p className="font-bold lg:text-5xl text-3xl text-center">
          We Are <span className="text-blue-700">Team IF</span>
        </p>
        <p className="text-xl text-center">Team IF를 소개합니다!</p>

        <div className="flex flex-row justify-center items-center mt-16">
          <div className="text-center mx-8">
            <p className="text-3xl font-bold">
              가나다라
            </p>
            <p>
              가나다라마바
            </p>
          </div>

          <div className="text-center mx-8">
            <p className="text-3xl font-bold">
              가나다라
            </p>
            <p>
              가나다라마바
            </p>
          </div>

          <div className="text-center mx-8">
            <p className="text-3xl font-bold">
              가나다라
            </p>
            <p>
              가나다라마바
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutAs;
