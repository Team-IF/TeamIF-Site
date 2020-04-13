import React from 'react';

const PanelHeader: React.FC = ({ children }) => {
  return <p className="text-3xl font-bold">{children}</p>;
};

export default PanelHeader;
