import React from 'react';
import NavBarHeader from '../../atomics/NabBar/NabBarHeader';
import NavBarItem from '../../atomics/NabBar/NavBarItem';

const NavBar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-700 p-6">
      <NavBarHeader>Team IF</NavBarHeader>

      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <NavBarItem>Foo</NavBarItem>
        <NavBarItem last>Bar</NavBarItem>
      </div>
    </nav>
  );
};

export default NavBar;
