import React from 'react';
import { Flex } from 'rebass';
import { LogoSt } from './Logo.styles';

const Logo = () => (
  <Flex alignItems="center" flexDirection="column">
    <LogoSt to="/">Mäxchen Meistershaft</LogoSt>
  </Flex>
);

export default Logo;
