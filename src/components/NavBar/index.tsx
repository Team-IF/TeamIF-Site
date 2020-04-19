import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import NavBarHeader from '../../atomics/NavBar/NavBarHeader';
import NavBarItem from '../../atomics/NavBar/NavBarItem';
import logo from '../../assets/images/logo.png';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: black;
  opacity: 60%;
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

  return (
    <NavStyle>
      <NavBarHeader>
        <a href="#home">
          <LogoStyle src={logo} />
        </a>
      </NavBarHeader>

      <MenuWrapper>
        <BuggerButtonStyle type="button" onClick={() => setOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </BuggerButtonStyle>
      </MenuWrapper>

      <MenuStyle isOpen={isOpen}>
        <a href="#aboutUs">
          <NavBarItem>About Us</NavBarItem>
        </a>
        <a href="#members">
          <NavBarItem>Members</NavBarItem>
        </a>
        <a href="#support">
          <NavBarItem>Support</NavBarItem>
        </a>
      </MenuStyle>
    </NavStyle>
  );
};

export default NavBar;
