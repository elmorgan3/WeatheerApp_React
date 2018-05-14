import React from 'react';
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';

const renderForecastItemDays = (forecastData) => {
  return forecastData.map(forecast => (
    <ForcastItem
      key={`${forecast.weekDay}${forecast.hour}`}
      weekDay={forecast.weekDay}
      hour={forecast.hour}
      data={forecast.data}>
    </ForcastItem>));
}

const renderProgress = () => {
  return <h3>"Cargando pronostico extendido..."</h3>
};

const ForecastExtended = ({ city, forecastData }) => (
  <div>
    <h2> Pronostico extendido {city}</h2 >
    {forecastData ? renderForecastItemDays(forecastData) : renderProgress()}
  </div >
);

ForecastExtended.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.array,
}

export default ForecastExtended;