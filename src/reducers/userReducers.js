export default (state = [], action) => {  
  switch (action.type){
    case 'USER_SELECTED':
      return action.payload;
    case 'CREATE_USER':
      return [
        ...state, 
        Object.assign({}, action.payload)
        ];
    default:
      return state;
  }
};

