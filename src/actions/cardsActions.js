import { actionTypes } from ".";

const action = (type, payload) => ({ type, payload });

export const addCard = (listId, text) => {
  return action(actionTypes.ADD_CARD, { listId, text });
};
