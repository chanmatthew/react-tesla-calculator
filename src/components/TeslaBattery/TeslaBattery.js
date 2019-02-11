import React, { Component } from 'react';
import './TeslaBattery.css';
import TeslaNotice from '../TeslaNotice/TeslaNotice';
import TeslaCar from '../TeslaCar/TeslaCar';
import TeslaStats from '../TeslaStats/TeslaStats';
import {getModelData} from '../../services/BatteryService';
import TeslaCounter from '../TeslaCounter/TeslaCounter';
import TeslaClimate from '../TeslaClimate/TeslaClimate';
import TeslaWheels from '../TeslaWheels/TeslaWheels';

const dataModels = getModelData();
const carModels = ['60', '60D', '75', '75D', '90D', 'P100D'];

class TeslaBattery extends Component {
  state = {
    carStats: [],
    config: {
      speed: 45,
      temperature: 10,
      climate: false,
      wheelSize: 21
    }
  }

  componentDidMount() {
    this.updateStats();
  }

  updateStats = () => {
    this.setState(({config}) => ({
      carStats: this.calculateStats(carModels, config)
    }));
  }

  calculateStats = (models, value) => {
    const {speed, temperature, climate, wheelSize} = value;
    
    return models.map(model => {
      const miles = dataModels[model][wheelSize][climate ? 'on' : 'off'].speed[speed][temperature];

      return {
        model,
        miles
      }
    })
  }

  increment = (e, title) => {
    e.preventDefault();

    let currentValue, maxValue, step;
    const {speed, temperature} = this.props.counterDefaultVal;

    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }

    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      this.updateCounterState(title, newValue);
    }
  }

  decrement = (e, title) => {
    e.preventDefault();

    let currentValue, minValue, step;
    const {speed, temperature} = this.props.counterDefaultVal;

    if (title === 'Speed') {
      currentValue = this.state.config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = this.state.config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }

    if (currentValue > minValue) {
      const newValue = currentValue - step;
      this.updateCounterState(title, newValue);
    }
  }

  updateCounterState = (title, newValue) => {
    let counterKey = title === 'Speed' ? 'speed' : 'temperature';

    this.setState(({config}) => ({
      config: {
        ...config,
        [counterKey]: newValue
      }
    }), () => {
      this.updateStats();
    });
  }

  handleClimateChange = () => {
    this.setState(({config}) => ({
      config: {
        ...config,  
        climate: !config.climate
      }
    }), () => {
      this.updateStats();
    });
  }

  handleWheelsChange = size => {
    this.setState(({config}) => ({
      config: {
        ...config,  
        wheelSize: size
      }
    }), () => {
      this.updateStats();
    });
  }

  render() {
    const { config, carStats } = this.state,
      { counterDefaultVal } = this.props;

    return (
      <form className="tesla-battery">
        <h1>Range Per Charge</h1>
        <TeslaCar wheelSize={config.wheelSize} />
        <TeslaStats carStats={carStats} />
        <div className="tesla-controls">
          <TeslaCounter
            currentValue={config.speed}
            initValues={counterDefaultVal.speed}
            increment={this.increment}
            decrement={this.decrement}
          />
          <div className="tesla-climate-container">
            <TeslaCounter 
              currentValue={config.temperature}
              initValues={counterDefaultVal.temperature}
              increment={this.increment}
              decrement={this.decrement}
            />
            <TeslaClimate 
              value={config.climate}
              limit={config.temperature > 10}
              handleClimateChange={this.handleClimateChange}
            />
          </div>
          <TeslaWheels 
            value={config.wheelSize} 
            handleWheelsChange={this.handleWheelsChange}
          />
        </div>
        <TeslaNotice />
      </form>
    );
  }
}

export default TeslaBattery;