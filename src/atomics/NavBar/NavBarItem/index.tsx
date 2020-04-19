import React from 'react';
import styled from 'styled-components';

const ItemStyle = styled.div`
  display: inline-block;
  color: white;
  cursor: pointer;
  margin-right: 16px;

  &:hover {
    color: #63b3ed;
  }

  @media screen and (max-width: 720px) {
    display: block;
    margin: 10px 16px;
  }
`;

const NavBarItem: React.FC = ({ children }) => {
  return <ItemStyle>{children}</ItemStyle>;
};

export default NavBarItem;
