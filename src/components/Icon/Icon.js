import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import React from 'react';
import theme from '../../utils/theme';
import icons from './icons';
import { SVGSt } from './Icon.styles';

const Icon = ({ type, ...rest }) => (
  <SVGSt xmlns="http://www.w3.org/2000/svg" {...rest}>
    <path d={icons[type]} />
  </SVGSt>
);

Icon.defaultProps = {
  rotation: null,
  fill: 'currentColor',
  fillRule: 'evenodd',
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  verticalAlign: 'middle',
};

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons)).isRequired,
  'aria-labelledby': PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  fill: PropTypes.oneOf(Object.keys(theme.colors)),
  fillRule: PropTypes.oneOf(['nonzero', 'evenodd']),
  viewBox: PropTypes.string,
  rotation: PropTypes.string,
  verticalAlign: PropTypes.string,
  ...propTypes.space,
};

export default Icon;
