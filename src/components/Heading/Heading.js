import PropTypes from 'prop-types';
import React from 'react';
import { H1St, H2St, H3St, H4St } from './Heading.styles';

export const H1 = ({ children, ...rest }) => <H1St {...rest}>{children}</H1St>;
export const H2 = ({ children, ...rest }) => <H2St {...rest}>{children}</H2St>;
export const H3 = ({ children, ...rest }) => <H3St {...rest}>{children}</H3St>;
export const H4 = ({ children, ...rest }) => <H4St {...rest}>{children}</H4St>;

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};

H1.propTypes = propTypes;
H2.propTypes = propTypes;
H3.propTypes = propTypes;
H4.propTypes = propTypes;
