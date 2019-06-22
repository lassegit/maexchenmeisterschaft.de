import PropTypes from 'prop-types';
import React from 'react';
import { ButtonSt } from './Button.styles';

const Button = ({ children, onClick }) => {
  return <ButtonSt onClick={onClick}>{children}</ButtonSt>;
};

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
};

export default Button;
