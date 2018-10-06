import { combineReducers } from 'redux';
import {
  cities,
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeatherCities
} from './cities';
import { city } from './city';
import { createSelector } from 'reselect';

export default combineReducers({
  //cities: cities,
  //city: city
  // con ECMA6 podemos hacerlo así
  cities,
  city
});

// export const getCity = state => state.city;
// export const getForecastDataFromCities = (state) => (_getForecastDataFromCities(state.cities, getCity(state)));

export const getCity = createSelector(state => state.city, city => city);
export const getForecastDataFromCities = createSelector(state => state.cities, getCity, _getForecastDataFromCities);

export const getWeatherCities = createSelector(state => state.cities, _getWeatherCities);