import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import destinations from './destinationsReducer';
import destination from './destinationReducer';
import geo from './geoReducer';
import hotels from './hotelReducer';
import budget from './budgetReducer';
import events from './eventsReducer';
import profile from './facebookReducer';
import weather from './weatherReducer'


const rootReducer = combineReducers({
  destinations,
  profile,
  destination,
  geo,
  hotels,
  budget,
  events,
  form: formReducer,
  weather,
});

export default rootReducer;
