import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import * as actions from './../actions';
// Esta libreria sirve para conectar React y Redux
import { connect } from 'react-redux';
// Importamos la clase que nos permitira crear el store
// import { setSelectedCity, setWeather } from './../actions';
import LocationList from './../components/LocationList';
import { getWeatherCities, getCity } from '../reducers';


class LocationListContainer extends Component {
  componentDidMount() {
    const { setWeather, setSelectedCity, cities, initialCity } = this.props;

    setWeather(cities);

    setSelectedCity(initialCity);
  }

  handleSelectedLocation = (city) => {
    // En el store invocamos al dispatch(Lanza la action) y le pasamos la action
    this.props.setSelectedCity(city);
  }

  render() {
    return (
      <LocationList
        cities={this.props.citiesWeather}
        onSelectedLocation={this.handleSelectedLocation}
      ></LocationList>
    );
  }
}


LocationListContainer.propTypes = {
  setSelectedCity: PropTypes.func.isRequired,
  setWeather: PropTypes.func,
  cities: PropTypes.array.isRequired,
  citiesWeather: PropTypes.array,
  initialCity: PropTypes.string,
};

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  initialCity: getCity(state)
});

// mapDispatchToProps es una función que devuelve un
// objeto que representan funciones
// const mapDispatchToProps = (dispatch) => ({
//   dispatchSetCity: value => dispatch(setSelectedCity(value)),
//   dispatchSetWheater: cities => dispatch(setWeather(cities))
// });
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);

// El connect permite acceder al store
// export default connect(mapStateToProps,
//   {
//     setSelectedCity,
//     setWeather
//   }
// )(LocationListContainer);
