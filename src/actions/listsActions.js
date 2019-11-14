import { actionTypes } from ".";

const action = (type, payload) => ({ type, payload });

export const addList = title => {
  return action(actionTypes.ADD_LIST, title);
};
