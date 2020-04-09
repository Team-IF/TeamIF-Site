import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import NavBarHeader from '../../atomics/NabBar/NabBarHeader';
import NavBarItem from '../../atomics/NabBar/NavBarItem';

const MenuStyle = styled.div<{ isOpen?: boolean }>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(true);

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
          <NavBarItem>Foo</NavBarItem>
          <NavBarItem last>Bar</NavBarItem>
        </MenuStyle>
      </div>
    </nav>
  );
};

export default NavBar;
