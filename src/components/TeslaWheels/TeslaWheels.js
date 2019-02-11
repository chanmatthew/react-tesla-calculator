import React from 'react';
import PropTypes from 'prop-types';
import './TeslaWheels.css';

const WHEEL_SIZES = [19, 21];

const LabelLists = ({ wheels }) => {
  const { value, handleWheelsChange } = wheels;

  return (
    <div>
      {WHEEL_SIZES.map(size => (
        <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size}${value === size ? ' tesla-wheels__item--active' : ''}`}>
          <input 
            type="radio"
            name="wheelSize"
            value={size}
            checked={value === size}
            onChange={() => {handleWheelsChange(size)}}
          />
          <p>
            {size}"
          </p>
        </label>
      ))}
    </div>
  )
};

const TeslaWheels = props => (
  <div className="tesla-wheels-option">
    <p className="tesla-wheels__title">Wheels</p>
    <div className="tesla-wheels__container">
      <LabelLists wheels={props} />
    </div>
  </div>
)

TeslaWheels.propTypes = {
  value: PropTypes.number,
  handleWheelsChange: PropTypes.func
};

export default TeslaWheels;