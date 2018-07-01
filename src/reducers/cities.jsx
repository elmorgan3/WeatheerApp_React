import { SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY } from '../actions';
import { createSelector } from 'reselect';
import toPairs from 'lodash.topairs';

export const cities = (state = {}, action) => {
   switch (action.type) {
      case SET_FORECAST_DATA: {
         // Pone de id el name de la city y como valor pone el forecastData que son los valores de la llamada a la API
         return { ...state, [action.payload.city]: { ...state[action.payload.city], forecastData: action.payload.forecastData, forecastDataDate: new Date() } };
      }
      case GET_WEATHER_CITY: {
         const city = action.payload;
         return { ...state, [city]: { ...state[action.payload.city], weather: null } };
      }
      case SET_WEATHER_CITY: {
         const { city, weather } = action.payload;
         return { ...state, [city]: { ...state[action.payload.city], weather: weather } };
      }
      default:
         return state;
   }
};

// Selector
// export const getForecastDataFromCities = (state, city) => state[city] && state[city].forecastData;

// Reselector
export const getForecastDataFromCities = createSelector((state, city) => state[city] &&
   state[city].forecastData, forecastData => forecastData);
export const getWeatherCities = createSelector(state => fromObjectToArray(state), cities => cities);

// toPairs crea una array con clave, valor 
const fromObjectToArray = (cities) => (toPairs(cities).map(([key, value]) =>
   ({ key: key, name: key, data: value.weather })));
