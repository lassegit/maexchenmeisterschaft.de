import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import infoAddon, { setDefaults, withInfo } from '@storybook/addon-info';
import theme from '../src/utils/theme';
import GlobalStyles from '../src/utils/GlobalStyles';

setAddon(infoAddon);

addDecorator((story, context) => withInfo('common info')(story)(context));

addDecorator(story =>
  withInfo('common info')(story)({
    header: false,
    inline: true,
  }),
);

addDecorator(getStory => (
  <ThemeProvider theme={theme}>
    <div style={{ padding: '20px' }}>
      {getStory()}
      <GlobalStyles />
    </div>
  </ThemeProvider>
));

const requestStory = require.context('../src/', true, /\.stories\.js$/);

function loadStories() {
  requestStory.keys().forEach(filename => requestStory(filename));
}

/**
 * Gatsby's Link overrides:
 * Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
 */
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = '';
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action('NavigateTo:')(pathname);
};
/* Gatsby config end */

configure(loadStories, module);
