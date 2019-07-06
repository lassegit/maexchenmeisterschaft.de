import PropTypes from 'prop-types';
import React from 'react';
import { ImageSt } from './Image.styles';

const Image = props => <ImageSt {...props} />;

Image.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Image;
