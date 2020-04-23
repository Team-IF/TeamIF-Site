import React from 'react';
import styled from 'styled-components';
import Section from '../../atomics/Section';
import background from '../../assets/images/background/backgroundFlow.jpg';
import Circle from './Circle';

interface ProfileData {
  readonly name: string;
  readonly description: string;
  readonly image: string;
}

const SectionStyle = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleStyle = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
  text-align: center;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CircleListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  margin-top: 2rem;
  justify-content: center;
`;

const Members: React.FC = () => {
  const profiles: ProfileData[] = [
    {
      name: '이로',
      description: 'ㅁㅇㄴ',
      image: require('../../assets/images/profile/1.png')
    }
  ];

  return (
    <SectionStyle>
      <div>
        <TitleStyle>팀원 소개</TitleStyle>

        <ListWrapper>
          <CircleListStyle>
            {
              profiles.map((item: ProfileData) => (
                <Circle key={item.name} profile={item.image}>{item.description}</Circle>
              ))
            }

            <Circle profile={background}>테스트</Circle>
            <Circle profile={background}>테스트</Circle>
            <Circle profile={background}>테스트</Circle>
            <Circle profile={background}>테스트</Circle>
            <Circle profile={background}>테스트</Circle>
          </CircleListStyle>
        </ListWrapper>
      </div>
    </SectionStyle>
  );
};

export default Members;
