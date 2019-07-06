import PropTypes from 'prop-types';
import React from 'react';
import { TextSt } from './Text.styles';

const Text = ({ children, ...rest }) => <TextSt {...rest}>{children}</TextSt>;

Text.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Text;
