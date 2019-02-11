import React from 'react';
import PropTypes from 'prop-types';
import './TeslaCar.css';

const TeslaCar = ({ wheelSize }) => (
  <div className="tesla-car">
    <div className="tesla-wheels">
      <div className={`tesla-wheel tesla-wheel--front tesla tesla-wheel--${wheelSize}`}></div>
      <div className={`tesla-wheel tesla-wheel--rear tesla-wheel--${wheelSize}`}></div>
    </div>
  </div>
);

TeslaCar.propTypes = {
  wheelSize: PropTypes.number
}

export default TeslaCar;