import PropTypes from 'prop-types';
import React from 'react';
import { ImageSt } from './Navigation.styles';

const Navigation = props => <ImageSt {...props} />;

Navigation.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Navigation;
