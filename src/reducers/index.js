// Set up your root reducer here...
import { combineReducers } from 'redux';
import users from './userReducers';

export default combineReducers({
  users: users,
  // More reducers if there are
  // can go here
});