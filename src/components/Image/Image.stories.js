import React from 'react';
import { storiesOf } from '@storybook/react';
import Image from './Image';

storiesOf('Image', module).add('default', () => <Image src="https://dummyimage.com/600x400/000/fff" alt="" />);
