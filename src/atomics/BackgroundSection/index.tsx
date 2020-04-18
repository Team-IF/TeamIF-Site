import React from 'react';
import styled from 'styled-components';

const BackgroundSectionStyle = styled.section<{ background: string }>`
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.background});
  background-repeat: no-repeat;
  background-size: cover;
`;

interface BackgroundSectionProps {
  readonly background: string;
}

const BackgroundSection: React.FC<BackgroundSectionProps & React.HTMLAttributes<any>> = ({
  children,
  background,
  ...props
}) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <BackgroundSectionStyle background={background} {...props}>
      {children}
    </BackgroundSectionStyle>
  );
};

export default BackgroundSection;
