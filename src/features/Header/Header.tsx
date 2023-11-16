import React from 'react';

import { HeaderContainer } from '../../components/HeaderContainer';
import { HeaderLogo } from '../../components/HeaderLogo';
import { HeaderMenu } from '../../components/HeaderMenu';
import { HeaderWrapper } from '../../components/HeaderWrapper';

import { HeaderChildren } from './HeaderChildren';
import { HeaderMenuChildren } from './HeaderMenuChildren';

interface Props {
  small?: boolean;
  hiring?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ small, className, ...props }) => {
  return (
    <HeaderWrapper {...props} className={className}>
      <HeaderLogo small={small} />
      <HeaderContainer>
        <HeaderChildren small={small} />
      </HeaderContainer>
      <HeaderMenu small={small}>
        <HeaderMenuChildren />
      </HeaderMenu>
    </HeaderWrapper>
  );
};
