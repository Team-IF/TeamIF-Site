import React from 'react';
import styled from 'styled-components';

const ATagStyle = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

const NoStyleA: React.FC<React.HTMLAttributes<any>> = ({ children, ...props }) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ATagStyle {...props}>{children}</ATagStyle>;
};

export default NoStyleA;
