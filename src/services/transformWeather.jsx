import convert from 'convert-units';
import { CLOUDY, SUN, RAIN, SNOW, THUNDER, DRIZZLE } from './../constants/weathers';

const TransformWeather = (weather_data) => {
  const { weather } = weather_data;
  const { humidity, temp } = weather_data.main;
  const { speed } = weather_data.wind;
  const weatherState = getWeatherState(weather);
  const temperature = getTemperatureInC(temp);
  // Si las variables de contenedor y recibidas se llaman igual
  // se puede simplificar poniendo solo el nombre de la variable
  const APIdata = {
    temperature: temperature,
    weatherState,
    humidity,
    wind: `${speed} m/s`,
  };
  return APIdata
}

const getWeatherState = (weather) => {
  const { id } = weather[0];
  if (id < 300) {
    return THUNDER;
  } else if (id < 400) {
    return DRIZZLE;
  } else if (id < 600) {
    return RAIN;
  } else if (id < 700) {
    return SNOW;
  } else if (id === 800) {
    return SUN;
  } else {
    return CLOUDY;
  }
}

const getTemperatureInC = (temp) => {
  return convert(temp).from('K').to('C').toFixed(2);
}

export default TransformWeather;