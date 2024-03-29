import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import React from 'react';
import { TextInputSt } from './TextInput.styles';

const TextInput = ({ handleChange, ...rest }) => <TextInputSt onChange={handleChange} {...rest} />;

TextInput.defaultProps = {
  value: '',
  handleChange: () => {},
};

TextInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
  ...propTypes.space,
};

export default TextInput;
