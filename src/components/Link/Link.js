import PropTypes from 'prop-types';
import React from 'react';
import { LinkSt } from './Link.styles';

const Link = ({ children, ...rest }) => <LinkSt {...rest}>{children}</LinkSt>;

Link.defaultProps = {
  unstyled: false,
};

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  unstyled: PropTypes.bool,
};

export default Link;
