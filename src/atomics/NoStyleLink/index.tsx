import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const LinkTagStyle = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`;

const NoStyleLink: React.FC<React.HTMLAttributes<any> & { to: string }> = ({
  to,
  children,
  ...props
}) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <LinkTagStyle to={to} {...props}>
      {children}
    </LinkTagStyle>
  );
};

export default NoStyleLink;
