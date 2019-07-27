import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../utils/GlobalStyles';
import theme from '../utils/theme';
import Intro from './Intro';
import Main from './Main';
import Navigation from './Navigation';

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <Intro hasIntro />
      <Navigation />
      <Main>{children}</Main>
      <GlobalStyles />
    </React.Fragment>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
