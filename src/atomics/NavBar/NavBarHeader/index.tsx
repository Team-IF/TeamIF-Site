import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: white;

  margin: auto 16px;

  @media screen and (max-width: 720px) {
    margin-left: 0.5rem;
  }
`;

const NavBarHeader: React.FC = ({ children }) => {
  return (
    <HeaderStyle>
      {children}
    </HeaderStyle>
  );
};

export default NavBarHeader;
