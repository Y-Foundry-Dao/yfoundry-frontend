import React from 'react';
import styled from 'styled-components';

import 'swiper/css';

type BackerLogoWrapperProps = {
  hasPadding?: boolean | undefined;
  asset: string;
  altLogoText: string;
};

export const BackerLogoWrapper: React.FC<BackerLogoWrapperProps> = (
  props: BackerLogoWrapperProps
) => {
  const { hasPadding = false, asset, altLogoText } = props;

  return (
    <Logo
      src={asset}
      alt={altLogoText}
      style={hasPadding ? { marginLeft: '50px' } : {}}
    />
  );
};

const Logo = styled.img`
  height: 40px;
  padding-top: 0px;

  @media (min-width: 425px) {
    height: 45px;
  }
  @media (min-width: 756px) {
    height: 50px;
  }
  @media (min-width: 1024px) {
    height: 60px;
  }
`;
