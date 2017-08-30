//import update from 'react-addons-update';

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
    case 'GROUP_SELECTED':
      return state.map((group) => {
        return Object.assign({}, group, { selected: (group.id === action.payload.id) }); 
      });
    default: return state;
  }
};
