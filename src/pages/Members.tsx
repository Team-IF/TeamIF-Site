import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Circle from '../components/Members/Circle';
import { members, MemberData } from '../stores/MemberData';

const SectionStyle = styled.section`
  display: flex;
  height: 100vh;
  flex: 1;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 720px) {
    height: auto;
    margin-top: 96px;
  }
`;

const TitleStyle = styled.p`
  font-weight: bold;
  font-size: 2.2rem;
  text-align: center;

  @media screen and (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

const ListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`;

const CircleListStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  overflow: hidden;
`;

const Members: React.FC = () => {
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

export default Members;
