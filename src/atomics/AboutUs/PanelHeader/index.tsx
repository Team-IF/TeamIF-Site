import React from 'react';

const PanelHeader: React.FC = ({ children }) => {
  return <p className="lg:text-3xl text-2xl font-bold">{children}</p>;
};

export default PanelHeader;
