// Set up your root reducer here...
import { combineReducers } from 'redux';
import userReducers from './userReducers';
import groupReducers from './groupReducers';
//import visibilityFilter from './visibilityFilter';


export default combineReducers({
  groupReducers: groupReducers,
  userReducers: userReducers,
  //visibilityFilter: visibilityFilter
});
