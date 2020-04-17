import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import NavBarHeader from '../../atomics/NavBar/NavBarHeader';
import NavBarItem from '../../atomics/NavBar/NavBarItem';
import logo from '../../assets/images/logo.png';

const MenuStyle = styled.div<{ isOpen?: boolean }>`
  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    width: 100vw;
  }
`;

const LogoStyle = styled.img`
  height: 80px;
`;

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-700 fixed top-0 w-full z-10">
      <NavBarHeader>
        <a href="#home">
          <LogoStyle src={logo} />
        </a>
      </NavBarHeader>

      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 text-white hover:text-white hover:text-blue-300"
          onClick={() => setOpen((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <MenuStyle className="bg-blue-700" isOpen={isOpen}>
          <a href="#aboutUs">
            <NavBarItem>About Us</NavBarItem>
          </a>
          <NavBarItem>Members</NavBarItem>
          <NavBarItem last>Support</NavBarItem>
        </MenuStyle>
      </div>
    </nav>
  );
};

export default NavBar;
