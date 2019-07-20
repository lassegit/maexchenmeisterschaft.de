import PropTypes from 'prop-types';
import React from 'react';
import styledPropTypes from '@styled-system/prop-types';
import theme from '../../utils/theme';

import { H1St, H2St, H3St, H4St } from './Heading.styles';

export const H1 = ({ children, ...rest }) => <H1St {...rest}>{children}</H1St>;
export const H2 = ({ children, ...rest }) => <H2St {...rest}>{children}</H2St>;
export const H3 = ({ children, ...rest }) => <H3St {...rest}>{children}</H3St>;
export const H4 = ({ children, ...rest }) => <H4St {...rest}>{children}</H4St>;

const defaultProps = {
  textAlign: 'left',
  color: 'primary',
};

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
  color: PropTypes.oneOf(Object.keys(theme.colors)),
  ...styledPropTypes.space,
};

H1.defaultProps = defaultProps;
H2.defaultProps = defaultProps;
H3.defaultProps = defaultProps;
H4.defaultProps = defaultProps;

H1.propTypes = propTypes;
H2.propTypes = propTypes;
H3.propTypes = propTypes;
H4.propTypes = propTypes;
