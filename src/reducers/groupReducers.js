import { GROUP_SELECTED, CREATE_GROUP, REMOVE_GROUP } from '../constants/';

const initialState = [
  {
    id: 1,
    name: "Family",
  },
  {
    id: 2,
    name: "Pets",
  },
  {
    id: 3,
    name: "School",
  }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case GROUP_SELECTED:
      return state.map((group) => {
        return Object.assign({}, group, { selected: (group.id === action.payload.id) }); 
      });
    case CREATE_GROUP: {
      const newGroup = action.payload;
      if (newGroup && newGroup.name) {
        const lastGroup = state.slice(-1)[0];
        newGroup.id = (lastGroup && lastGroup.id) ? (lastGroup.id + 1) : 1; 
        return [
          ...state, 
          Object.assign({}, newGroup)
          ];
      }
      else return state;
    }
    case REMOVE_GROUP: {
      return state.filter((group) => { 
        return !group.selected;
      });
    }
    default: return state;
  }
};
