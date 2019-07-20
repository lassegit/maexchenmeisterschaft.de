import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../utils/GlobalStyles';
import theme from '../utils/theme';
import Intro from './Intro';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Intro />
      <main role="main">{children}</main>
      <GlobalStyles />
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
