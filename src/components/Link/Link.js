import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import React from 'react';
import { LinkSt } from './Link.styles';

const Link = ({ children, to, useRouter, ...rest }) => {
  if (!useRouter) {
    return (
      <LinkSt href={to} as="a" {...rest}>
        {children}
      </LinkSt>
    );
  }

  return (
    <LinkSt to={to} {...rest}>
      {children}
    </LinkSt>
  );
};

Link.defaultProps = {
  unstyled: false,
  useRouter: true,
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  unstyled: PropTypes.bool,
  useRouter: PropTypes.bool,
  ...propTypes.space,
};

export default Link;
