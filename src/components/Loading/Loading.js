import PropTypes from 'prop-types';
import React from 'react';
import { LoadingSt } from './Loading.styles';

const Loading = ({ color, ...rest }) => (
  <LoadingSt color={color} {...rest}>
    <div className="lds-css">
      <div className="lds-rolling">
        <div />
      </div>
    </div>
  </LoadingSt>
);

Loading.defaultProps = {
  color: 'primary',
  margin: '',
};

Loading.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
};

export default Loading;
