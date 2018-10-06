import transformForecast from '../services/transformForcast';
import transformWeather from '../services/transformWeather';

// El uso de constantes para los tipos de actions es recomendable
export const SET_CITY = "SET_CITY";
export const SET_FORECAST_DATA = "SET_FORECAST_DATA";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";

// Esto son llamadas que recogera el reducer, basandose en el TYPE
const setCity = value => ({ type: SET_CITY, value });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });

const getWeatherCity = payload => ({ type: GET_WEATHER_CITY, payload });
const setWeahterCity = payload => ({ type: SET_WEATHER_CITY, payload });

const api_key = 'e398d4b953f1a24ebe208715850f04e6';
const url = `http://api.openweathermap.org/data/2.5/forecast`;
const url_weather = "http://api.openweathermap.org/data/2.5/weather";

// Action
export const setSelectedCity = payload => {
  return (dispatch, getState) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;
    // Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload));

    const state = getState();
    const date = state.cities[payload] && state.cities[payload].forecastDataDate;
    const now = new Date();

    if(date && (now - date) < 1* 60 * 1000) {
      return;
    }

    return fetch(url_forecast).then(
      data => (data.json())
    ).then(weather_data => {
      const forecastData = transformForecast(weather_data);
      // Modificar el estado con el resultado de la promise (fetch)
      dispatch(setForecastData({ city: payload, forecastData }));
    });
  };
};

// Action
export const setWeather = payload => {
  return dispatch => {
    payload.forEach(city => {

      dispatch(getWeatherCity(city));

      const api_weather = `${url_weather}?q=${city}&appid=${api_key}`;
      fetch(api_weather).then(data => {
        return data.json();
      }).then(weather_data => {
        const weather = transformWeather(weather_data);
        // Llamamamos 
        dispatch(setWeahterCity({city, weather}));
      });
    });
  }
};