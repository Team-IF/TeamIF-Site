import React from 'react';

const NavBarHeader: React.FC = ({ children }) => {
  return (
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <span className="font-semibold text-xl tracking-tight">{children}</span>
    </div>
  );
};

export default NavBarHeader;
