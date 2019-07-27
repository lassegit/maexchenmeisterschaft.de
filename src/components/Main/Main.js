import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import React from 'react';
import { MainSt } from './Main.styles';

const Main = ({ children, ...rest }) => (
  <MainSt role="main" {...rest}>
    {children}
  </MainSt>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypes.space,
};

export default Main;
