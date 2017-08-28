// Set up your root reducer here...
import { combineReducers } from 'redux';
import userReducers from './userReducers';
//import allUsers from './users';
import groupReducers from './groupReducers';

export default combineReducers({
  groupReducers: groupReducers,
  userReducers: userReducers,
  // More reducers if there are
  // can go here
});