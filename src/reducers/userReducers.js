import update from 'react-addons-update';
import { USER_SELECTED, 
         TOGGLE_USER_GROUP, 
         CREATE_USER, 
         REMOVE_USER, 
         //SET_VISIBILITY_FILTER, 
         //VisibilityFilters 
       } from '../constants/';

const initialState = [
  {
    id: 1,
    name: 'Homer',
    groups: [1],
  },
  {
    id: 2,
    name: 'Marge',
    groups: [1]
  },
  {
    id: 3,
    name: 'Bart',
    groups: [1, 3]
  },
  {
    id: 4,
    name: 'Lisa',
    groups: [1, 3]
  },
  {
    id: 5,
    name: 'Maggie',
    groups: [1]
  },
  {
    id: 6,
    name: 'Snowball II',
    groups: [1, 2]
  },
  {
    id: 7,
    name: 'Santa\'s Little Helper',
    groups: [1, 2]
  },
  {
    id: 8,
    name: 'Milhouse',
    groups: [3]
  }
];

export default (state = initialState, action) => {  
  switch (action.type) {
    case USER_SELECTED:
      return state.map((user) => {
        return Object.assign({}, user, { selected: (user.id === action.payload.id) }); 
      });
    case TOGGLE_USER_GROUP:
      return state.map((user) => {
        if (user.id === action.payload.user.id) {
          const groupId = action.payload.group.id;
          const i = action.payload.user.groups.indexOf(groupId);
          return (i === -1) ? update(user, {groups: {$push: [groupId]}}) : update(user, {groups: {$splice: [[i, 1]]}});
        } 
        return user;
      });
    case CREATE_USER: {
      const newUser = action.payload;
      if (newUser && newUser.name) {
        const lastUser = state.slice(-1)[0];
        newUser.id = (lastUser && lastUser.id) ? (lastUser.id + 1) : 1; 
        newUser.groups = [];    //new Users have no groups
        return [
          ...state, 
          Object.assign({}, newUser)
          ];
      }      
      break;
    }
    case REMOVE_USER: {
      return state.filter((user) => { 
        return !user.selected;
      });
    }
    default:
      return state;
  }
  return state;
};

