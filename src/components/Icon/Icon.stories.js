import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './Icon';

const props = {
  type: 'ARROWCIRLE',
  width: '50px',
  height: '50px',
  viewBox: '0 ,0 24 24',
  'aria-labelledby': 'Arrow ,icon',
};

storiesOf('Icon', module).add('default', () => (
  <div>
    <Icon {...props} />
    <Icon {...props} rotation="90deg" />
    <Icon {...props} rotation="180deg" />
    <Icon {...props} rotation="270deg" />
    <Icon {...props} type="github" />
  </div>
));
