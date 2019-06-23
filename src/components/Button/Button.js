import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../Loading';
import { ButtonSt } from './Button.styles';

const Button = ({ children, onClick, isLoading, variant, ...rest }) => {
  return (
    <ButtonSt onClick={onClick} variant={variant} isLoading={isLoading} {...rest}>
      {isLoading && <Loading color={variant === 'primary' ? 'white' : 'primary'} margin="0 20px 4px 0" />}
      {children}
    </ButtonSt>
  );
};

Button.defaultProps = {
  onClick: () => {},
  type: 'button',
  variant: 'primary',
  isLoading: false,
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  isLoading: PropTypes.bool,
};

export default Button;
