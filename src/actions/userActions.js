export const selectUser = (user) => {
  return {
    type: 'USER_SELECTED',
    payload: user
  };
};

export const toggleUserGroup = (user, group) => {
  return {
    type: 'TOGGLE_USER_GROUP',
    payload: {
      user: user,
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

export const removeUser = (user) => {
  return {
    type: 'REMOVE_USER',
    payload: user
  };
};

