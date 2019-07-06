import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider } from 'styled-components';
import infoAddon, { setDefaults, withInfo } from '@storybook/addon-info';
import theme from '../src/utils/theme';
import GlobalStyles from '../src/utils/GlobalStyles';

setDefaults({
  header: false,
  inline: true,
});

setAddon(infoAddon);

addDecorator((story, context) => withInfo('common info')(story)(context));

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

configure(loadStories, module);
