import React from 'react';
import styled from 'styled-components';
import Section from '../../atomics/Section';
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
  width: 80%;
  margin-top: 2rem;
  justify-content: center;
`;

const Members: React.FC = () => {
  const profiles: ProfileData[] = [
    {
      name: '이로',
      description: '만사가 귀찮은 유사 프로그래머',
      image: require('../../assets/images/profile/1.png'),
    },
    {
      name: 'gangjun06',
      description: '',
      image: require('../../assets/images/profile/2.png'),
    },
    {
      name: 'GPL_Developer',
      description: '개발에 찌든 고등학생',
      image: require('../../assets/images/profile/3.png'),
    },
    {
      name: 'moole100',
      description: '몰백이는 오랜지 병 으로 사망했다..',
      image: require('../../assets/images/profile/4.png'),
    },
    {
      name: 'Nrvnqsr Chaos',
      description: '열심히 개발하는 Team IF중 유일한 잉여',
      image: require('../../assets/images/profile/5.png'),
    },
    {
      name: 'PatrickKR',
      description: '이것저것 하는 Patrick입니다. 반갑습니다.',
      image: require('../../assets/images/profile/6.png'),
    },
    {
      name: 'Red_Pixel_Block',
      description:
        '평소에는 픽셀 아트만 하지만 프로그램도 하고 싶은 평범한(?) 빨강색 픽셀 블록 입니다',
      image: require('../../assets/images/profile/7.png'),
    },
    {
      name: '하늘빛',
      description: '코드 스타일과 패턴에 관심이 많아요',
      image: require('../../assets/images/profile/8.png'),
    },
    {
      name: 'ksi123456ab',
      description: '고3인데 공부는 안하고 컴퓨터만 하는 개발자입니다',
      image: require('../../assets/images/profile/default_profile.png'),
    },
    {
      name: 'PotatoY',
      description: '잡다한 활동을 전문적으로 하는 사람입니다!',
      image: require('../../assets/images/profile/9.png'),
    },
    {
      name: 'WieeRd',
      description: '',
      image: require('../../assets/images/profile/10.png'),
    },
    {
      name: '라피스',
      description:
        '고등학생 코린이 라피스입니다! 만들고 싶은 것들을 만들고, 배우고 싶은 것들을 배우고 있어요 :D',
      image: require('../../assets/images/profile/11.png'),
    }
  ];

  return (
    <SectionStyle>
      <div>
        <TitleStyle>팀원 소개</TitleStyle>

        <ListWrapper>
          <CircleListStyle>
            {profiles.map((item: ProfileData) => (
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
  );
};

export default Members;
