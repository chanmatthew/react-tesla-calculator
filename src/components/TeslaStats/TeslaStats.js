import React from 'react';
import PropTypes from 'prop-types';
import './TeslaStats.css';

const TeslaStats = ({ carStats }) => (
  <div className="tesla-stats">
    <ul>
      {carStats.map(stat => (
        <li key={stat.model}>
          <div className={`tesla-stats-icon tesla-stats-icon--${stat.model.toLowerCase()}`}></div>
          <p>{stat.miles}</p>
        </li>
      ))}
    </ul>
  </div>
);

TeslaStats.propTypes = {
  carStats: PropTypes.array
}

export default TeslaStats;