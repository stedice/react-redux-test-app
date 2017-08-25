// Set up your root reducer here...
import { combineReducers } from 'redux';
import userReducers from './userReducers';
import allUsers from './users';


export default combineReducers({
  userReducers: userReducers,
  allUsers: allUsers,
  // More reducers if there are
  // can go here
});