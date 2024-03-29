import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import React from 'react';
import { TextAreaSt } from './TextArea.styles';

const TextArea = ({ handleChange, ...rest }) => <TextAreaSt onChange={handleChange} {...rest} />;

TextArea.defaultProps = {
  value: '',
  handleChange: () => {},
  rows: 5,
};

TextArea.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  rows: PropTypes.number,
  ...propTypes.space,
};

export default TextArea;
