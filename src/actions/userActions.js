export const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    user: user
  };
};
