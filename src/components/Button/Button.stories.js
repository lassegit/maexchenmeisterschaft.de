import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Button from './Button';

const handleClick = () => action('Button clicked');

storiesOf('Button', module)
  .add('default', () => (
    <Button onClick={handleClick} variant="primary">
      This is a button
    </Button>
  ))
  .add('secondary', () => (
    <Button onClick={handleClick} variant="secondary">
      This is a button
    </Button>
  ))
  .add('disabled', () => (
    <Button onClick={handleClick} disabled>
      This is a button
    </Button>
  ))
  .add('unstyled', () => (
    <Button onClick={handleClick} unstyled>
      This is a button
    </Button>
  ))
  .add('loading', () => (
    <Button onClick={handleClick} isLoading>
      This is a button
    </Button>
  ));
