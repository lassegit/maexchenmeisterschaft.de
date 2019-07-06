import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

storiesOf('TextInput', module).add('default', () => (
  <TextInput name="name" placeholder="A placeholder" value="Text input value" type="text" />
));
