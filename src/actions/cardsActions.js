import { actionTypes, action } from ".";
import uuid from "uuidv4";

export const addCard = (listId, text) => {
  const id = uuid();
  return action(actionTypes.ADD_CARD, { listId, text, id });
};

export const editCard = (id, listId, newText) =>
  action(actionTypes.EDIT_CARD, { id, listId, newText });

export const deleteCard = (id, listId) =>
  action(actionTypes.DELETE_CARD, { id, listId });
