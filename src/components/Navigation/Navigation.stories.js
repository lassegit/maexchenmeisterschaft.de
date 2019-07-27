import React from 'react';
import { storiesOf } from '@storybook/react';
import Navigation from './Navigation';

storiesOf('Navigation', module).add('default', () => (
  <div style={{ background: '#000', padding: '20px' }}>
    <Navigation />
  </div>
));
