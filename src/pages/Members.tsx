import React from 'react';
import styled from 'styled-components';
import md5 from 'md5';
import NavBar from '../components/NavBar';
import Circle from '../components/Members/Circle';
import { MemberData, members } from '../stores/MemberData';
import SectionTitle from '../atomics/SectionTitle';

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
          <SectionTitle>팀원 소개</SectionTitle>

          <ListWrapper>
            <CircleListStyle>
              {members.map((item: MemberData) => (
                <Circle
                  key={item.name}
                  profile={
                    `https://www.gravatar.com/avatar/${
                      md5(item.email)
                    }?s=1024&d=https%3A%2F%2Fteamif%2Eio%2Fdefault_profile%2Epng`
                  }
                >
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
