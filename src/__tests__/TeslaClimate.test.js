import React from 'react';
import { render, fireEvent, cleanup, waitForElement } from 'react-testing-library';
import TeslaClimate from '../components/TeslaClimate/TeslaClimate';

afterEach(cleanup);

test('climate button toggles from heat off to heat on', () => {
  const config = {
    climate: false,
    temperature: 10
  };

  const handleClimateChange = jest.fn();

  const { getByText, getByTestId } = render(
    <TeslaClimate 
      value={config.climate} 
      limit={config.temperature > 10} 
      handleClimateChange={handleClimateChange}   
    />
  );

  fireEvent.click(getByTestId('tesla-climate'));

  expect(handleClimateChange).toHaveBeenCalledTimes(1);
  // expect(getByTestId)
});