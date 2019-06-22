import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module).add('default', () => <Button onClick={action('Button clicked…')}>This is a Button</Button>);
