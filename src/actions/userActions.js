export const selectUser = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    payload: user
  };
};


