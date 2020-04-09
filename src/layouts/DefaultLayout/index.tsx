import React from 'react';
import NavBar from '../../components/NavBar';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default DefaultLayout;
