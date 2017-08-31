import { GROUP_SELECTED, CREATE_GROUP, REMOVE_GROUP } from '../constants/';



export const selectGroup = (group) => {
  return {
    type: GROUP_SELECTED,
    payload: group
  };
};

export const createGroup = (group) => {
  return {
    type: CREATE_GROUP,
    payload: group
  };
};

export const removeGroup = (group) => {
  return {
    type: REMOVE_GROUP,
    payload: group
  };
};