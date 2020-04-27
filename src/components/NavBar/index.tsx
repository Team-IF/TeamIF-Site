import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import NavBarHeader from '../../atomics/NavBar/NavBarHeader';
import NavBarItem from '../../atomics/NavBar/NavBarItem';
import logo from '../../assets/images/logo.png';

const NavStyle = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.7);
`;

const LogoStyle = styled.img`
  height: 80px;
`;

const MenuWrapper = styled.div`
  display: none;

  @media screen and (max-width: 720px) {
    display: block;
  }
`;

const BuggerButtonStyle = styled.button`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  color: white;
  border: none;
  background: none;

  &:hover {
    color: #90cdf4;
  }
`;

const MenuStyle = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  flex-grow: 1;

  @media screen and (max-width: 720px) {
    display: ${(props) => (props.isOpen ? 'block' : 'none')};
    width: 100vw;
  }
`;

const ATagStyle = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const LinkTagStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const NavBar: React.FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const history = useHistory();

  const changeFullpage = (value: number) => {
    history.push('/');
    setTimeout(() => {
      // @ts-ignore
      // eslint-disable-next-line no-undef
      fullpage_api.moveTo(value);
    }, 50);
  };

  return (
    <NavStyle>
      <NavBarHeader>
        <ATagStyle onClick={() => changeFullpage(1)}>
          <LogoStyle src={logo} />
        </ATagStyle>
      </NavBarHeader>

      <MenuWrapper>
        <BuggerButtonStyle type="button" onClick={() => setOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={faBars} />
        </BuggerButtonStyle>
      </MenuWrapper>

      <MenuStyle isOpen={isOpen}>
        <ATagStyle onClick={() => changeFullpage(2)}>
          <NavBarItem>About</NavBarItem>
        </ATagStyle>
        <LinkTagStyle to="/members">
          <NavBarItem>Members</NavBarItem>
        </LinkTagStyle>
        <ATagStyle onClick={() => changeFullpage(4)}>
          <NavBarItem>Support</NavBarItem>
        </ATagStyle>
      </MenuStyle>
    </NavStyle>
  );
};

export default NavBar;
