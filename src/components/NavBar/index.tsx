import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import NavBarHeader from '../../atomics/NavBar/NavBarHeader';
import NavBarItem from '../../atomics/NavBar/NavBarItem';
import logo from '../../assets/images/logo.png';
import NoStyleA from "../../atomics/NoStyleA";
import NoStyleLink from "../../atomics/NoStyleLink";

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
`;

const LogoStyle = styled.img`
  height: 80px;
`;

const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 720px) {
    display: block;
  }
`;

const BuggerButtonStyle = styled.button`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: white;
  border: none;
  background: none;

  &:hover {
    color: #90cdf4;
  }
`;

const MenuStyle = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media screen and (max-width: 720px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    width: 100vw;
  }
`;

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const history = useHistory();

  const changeFullpage = (value: number) => {
    history.push('/');
    setTimeout(() => {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(value);
    }, 50);
  };

  return (
    <NavStyle>
      <NavBarHeader>
        <NoStyleA onClick={() => changeFullpage(1)}>
          <LogoStyle src={logo} />
        </NoStyleA>
      </NavBarHeader>

      <MenuWrapper>
        <BuggerButtonStyle type="button" onClick={() => setOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </BuggerButtonStyle>
      </MenuWrapper>

      <MenuStyle isOpen={isOpen}>
        <NoStyleA onClick={() => changeFullpage(2)}>
          <NavBarItem>About</NavBarItem>
        </NoStyleA>
        <NoStyleLink to="/members">
          <NavBarItem>Members</NavBarItem>
        </NoStyleLink>
        <NoStyleLink to="/career">
          <NavBarItem>Career</NavBarItem>
        </NoStyleLink>
      </MenuStyle>
    </NavStyle>
  );
};

export default NavBar;
