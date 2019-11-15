import { actionTypes } from ".";

const action = (type, payload) => ({ type, payload });

export const addCard = (listId, text) => {
  return action(actionTypes.ADD_CARD, { listId, text });
};

export const editCard = (id, listId, newText) =>
  action(actionTypes.EDIT_CARD, { id, listId, newText });

export const deleteCard = (id, listId) =>
  action(actionTypes.DELETE_CARD, { id, listId });
