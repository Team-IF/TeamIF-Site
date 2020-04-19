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

const ATagStyle = styled.a`
  text-decoration: none;
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
        <ATagStyle href="#aboutUs">
          <NavBarItem>About Us</NavBarItem>
        </ATagStyle>
        <ATagStyle href="#members">
          <NavBarItem>Members</NavBarItem>
        </ATagStyle>
        <ATagStyle href="#support">
          <NavBarItem>Support</NavBarItem>
        </ATagStyle>
      </MenuStyle>
    </NavStyle>
  );
};

export default NavBar;
