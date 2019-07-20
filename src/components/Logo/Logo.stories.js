import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from './Logo';

storiesOf('Logo', module)
  .addDecorator(story => <div style={{ background: '#000', padding: '40px' }}>{story()}</div>)
  .add('default', () => <Logo />);
