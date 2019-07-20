import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import React from 'react';
import { ImageSt } from './Image.styles';

const Image = props => <ImageSt {...props} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
  ...propTypes.space,
};

export default Image;
