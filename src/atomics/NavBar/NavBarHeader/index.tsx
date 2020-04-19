import React from 'react';

const NavBarHeader: React.FC = ({ children }) => {
  return <div className="flex items-center flex-shrink-0 text-white mr-8 lg:ml-8 ml-2">{children}</div>;
};

export default NavBarHeader;