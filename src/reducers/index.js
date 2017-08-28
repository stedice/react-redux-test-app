// Set up your root reducer here...
import { combineReducers } from 'redux';
import userReducers from './userReducers';
//import allUsers from './users';
import allGroups from './groups';

export default combineReducers({
  //allUsers: allUsers,
  allGroups: allGroups,
  userReducers: userReducers,
  // More reducers if there are
  // can go here
});