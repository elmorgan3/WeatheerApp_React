import { SET_CITY } from '../actions';

export const city = (state = {}, action) => {
   debugger;
  switch (action.type) {
    case SET_CITY:
    // Con este return añadimos una nueva propiedad 
    // al state, en este caso la propiedad city
        return action.value;

    default:
    return state;
  }
};