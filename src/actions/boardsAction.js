import { actionTypes, action } from "../actions";
import uuid from "uuidv4";

export const setActiveBoard = id =>
  action(actionTypes.SET_ACTIVE_BOARD, { id });

export const addBoard = title => {
  const id = uuid();
  return {
    type: actionTypes.ADD_BOARD,
    payload: { title, id }
  };
};

export const editBoardTitle = (title, boardId) =>
  action(actionTypes.EDIT_BOARD_TITLE, { title, boardId });

export const toggleBoardFav = () => action(actionTypes.TOGGLE_BOARD_FAV);

export const toggleBoardPrivacy = () => {
  console.log("xx");
  return action(actionTypes.TOGGLE_BOARD_PRIVACY);
};
