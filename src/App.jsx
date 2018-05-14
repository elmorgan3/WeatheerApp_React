import React, { Component } from 'react';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';

const citiesArray = ["Cordoba", "Sevilla", "Madrid", "Barcelona"];

class App extends Component {
   render() {
      return (
         <MuiThemeProvider>
            <Grid>
               <Row>
                  <Col xs={12}>
                     <AppBar title="Weather App" />
                  </Col>
               </Row>
               <Row>
                  <Col xs={12} lg={6}>
                     <LocationListContainer cities={citiesArray}></LocationListContainer>
                  </Col>
                  <Col xs={12} lg={6}>
                     <Paper zDepth={4}>
                        <div className="detail">
                           <ForecastExtendedContainer></ForecastExtendedContainer>}
                        </div>
                     </Paper>
                  </Col>
               </Row>
            </Grid >
         </MuiThemeProvider >
      );
   }
}

export default App;
