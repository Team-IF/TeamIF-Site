import React from 'react';

const Panel: React.FC = ({ children }) => {
  return <div className="text-center lg:mx-16 my-8">{children}</div>;
};

export default Panel;
