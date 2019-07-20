import React from 'react';
import { storiesOf } from '@storybook/react';
import Intro from './Intro';

storiesOf('Intro', module)
  .add('default', () => (
    <div style={{ background: '#000', padding: '20px' }}>
      <Intro />
    </div>
  ))
  .add('with introtext', () => (
    <div style={{ background: '#000', padding: '20px' }}>
      <Intro hasIntro />
    </div>
  ));
