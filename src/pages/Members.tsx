import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Circle from '../components/Members/Circle';
import Section from '../atomics/Section';
import { members, MemberData } from '../stores/MemberData';

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
  width: 80%;
  margin-top: 2rem;
  justify-content: center;
`;

const Memebers: React.FC = () => {
  return (
    <>
      <NavBar />
      <SectionStyle>
        <div>
          <TitleStyle>팀원 소개</TitleStyle>

          <ListWrapper>
            <CircleListStyle>
              {members.map((item: MemberData) => (
                <Circle key={item.name} profile={item.image}>
                  <div>
                    <b>{item.name}</b>
                    <br />
                    {item.description}
                  </div>
                </Circle>
              ))}
            </CircleListStyle>
          </ListWrapper>
        </div>
      </SectionStyle>
    </>
  );
};

export default Memebers;
