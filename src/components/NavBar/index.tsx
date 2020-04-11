import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import NavBarHeader from '../../atomics/NavBar/NavBarHeader';
import NavBarItem from '../../atomics/NavBar/NavBarItem';

const MenuStyle = styled.div<{ isOpen?: boolean }>`
  @media screen and (max-width: 1024px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
  }
`;

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-6">
      <NavBarHeader>Team IF</NavBarHeader>

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
        <MenuStyle isOpen={isOpen}>
          <NavBarItem>소개</NavBarItem>
          <NavBarItem>팀원</NavBarItem>
          <NavBarItem last>지원</NavBarItem>
        </MenuStyle>
      </div>
    </nav>
  );
};

export default NavBar;
