import { actionTypes } from "../actions";
import uuid from "uuidv4";

export const setActiveBoard = id => {
  return {
    type: actionTypes.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuid();
  return {
    type: actionTypes.ADD_BOARD,
    payload: { title, id }
  };
};
