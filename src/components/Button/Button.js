import propTypes from '@styled-system/prop-types';
import PropTypes from 'prop-types';
import React from 'react';
import Loading from '../Loading';
import { ButtonSt, UnstyledButtonSt } from './Button.styles';

const Button = ({ children, onClick, isLoading, variant, unstyled, ...rest }) => {
  if (unstyled) {
    return (
      <UnstyledButtonSt onClick={onClick} {...rest}>
        {children}
      </UnstyledButtonSt>
    );
  }

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
  unstyled: '',
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary']),
  isLoading: PropTypes.bool,
  unstyled: PropTypes.string,
  ...propTypes.space,
};

export default Button;
