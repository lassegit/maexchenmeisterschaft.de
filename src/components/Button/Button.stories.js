import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const handleClick = () => action('Button clicked');
const text = 'This is a button';

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={handleClick} variant="primary">
      {text}
    </Button>
  ))
  .add('secondary', () => (
    <Button onClick={handleClick} variant="secondary">
      {text}
    </Button>
  ))
  .add('disabled', () => (
    <Button onClick={handleClick} disabled>
      {text}
    </Button>
  ))
  .add('unstyled', () => (
    <Button onClick={handleClick} unstyled>
      {text}
    </Button>
  ))
  .add('loading', () => (
    <Button onClick={handleClick} isLoading>
      {text}
    </Button>
  ));
