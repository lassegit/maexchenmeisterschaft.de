import React from 'react';
import { Flex } from 'rebass';
import { LogoSt } from './Logo.styles';

const Logo = props => (
  <Flex alignItems="center" flexDirection="column" {...props}>
    <LogoSt to="/">Mäxchen Meistershaft</LogoSt>
  </Flex>
);

export default Logo;
