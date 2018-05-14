import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity} from '../reducers';

class ForecastExtendedContainer extends Component {
  render() {
    return (
      this.props.city &&
      <ForecastExtended city={this.props.city} forecastData={this.props.forecastData} />
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string,
  forecastData: PropTypes.array,
};

// En el mapStateToProps es una funcion que recibe el state y
// retorna un objeto con la propiedad que nos interesa
const mapStateToProps = (state) => ({
  city: getCity(state),
  forecastData: getForecastDataFromCities(state),
});
// Esto es lo mismo destructurado
// const mapStateToProps = ({ city, cities }) => ({ city, forecastData: cities[city] && cities[city].forecastData }); 

export default connect(mapStateToProps, null)(ForecastExtendedContainer);