import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from '../WeatherLocation/WeatherData';

// const data = {
//   temperature: "10",
//   humidity: 10,
//   weatherState: 'normal',
//   wind: 'normal',
// }

const ForcastItem = ({ weekDay, hour, data }) => (
  <div>
    <div>{weekDay} Hora: {hour} hs</div>
    <WeatherData data={data}></WeatherData>
  </div>
);

ForcastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.node.isRequired,
  data: PropTypes.shape({
    temperature: PropTypes.string.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
  })
}

export default ForcastItem;