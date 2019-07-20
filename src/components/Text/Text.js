import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import React from 'react';
import theme from '../../utils/theme';
import { TextSt } from './Text.styles';

const Text = ({ children, ...rest }) => <TextSt {...rest}>{children}</TextSt>;

Text.defaultProps = {
  textAlign: 'left',
  color: 'primary',
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
  color: PropTypes.oneOf(Object.keys(theme.color)),
  ...propTypes.space,
};

export default Text;
