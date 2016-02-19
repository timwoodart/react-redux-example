import { routeReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import profile from './profile';

export default combineReducers({
  routing,
  profile
});