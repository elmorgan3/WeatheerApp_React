import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';
import './styles.css';

// const strToComponent = cities => {
//   return cities.map(city => (<WeatherLocation city={city} />))
// };
const LocationList = ({ cities, onSelectedLocation }) => {
  const hanldeWeatherLocationClick = (city) => {
    onSelectedLocation(city);
  }
  const strToComponent = cities => (
    // key={index} utiliza el indice del mapper para 
    // ponerle una key unica al componenete
    cities.map(city => (
      <WeatherLocation
        key={city.key}
        city={city.name}
        onWeatherLocationClick={() => hanldeWeatherLocationClick(city.name)}
        data={city.data}/>
    ))
  );

  return (
    <div className="locationList">
      {strToComponent(cities)}
    </div>
  );
};


LocationList.propTypes = {
  cities: PropTypes.array.isRequired,
  onSelectedLocation: PropTypes.func,
}

export default LocationList;