import React from 'react';
import { storiesOf } from '@storybook/react';
import { H1, H2, H3, H4 } from './Heading';

storiesOf('Heading', module).add('headings', () => (
  <div>
    <H1>Heading text</H1>
    <H2>Heading text</H2>
    <H3>Heading text</H3>
    <H4>Heading text</H4>
  </div>
));
