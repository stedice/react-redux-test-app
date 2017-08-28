export const selectUser = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};

export const toggleUserGroup = (activeUser, group) => {
  return {
    type: 'TOGGLE_USER_GROUP',
    payload: {
      activeUser: activeUser,
      group:group
    }
  };
};

export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    payload: user
  };
};


