import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';

storiesOf('Logo', module).add('default', () => (
  <div style={{ background: '#000', padding: '40px' }}>
    <Logo />
  </div>
));
