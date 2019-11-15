export * from "./listsActions";
export * from "./cardsActions";
export * from "./boardsAction";

export const actionTypes = {
  ADD_CARD: "ADD_CARD",
  EDIT_CARD: "EDIT_CARD",
  DELETE_CARD: "DELETE_CARD",
  ADD_LIST: "ADD_LIST",
  EDIT_LIST_TITLE: "EDIT_LIST_TITLE",
  DELETE_LIST: "DELETE_LIST",
  DRAG_HAPPENED: "DRAG_HAPPENED",
  EDIT_BOARD_TITLE: "EDIT_BOARD_TITLE",
  TOGGLE_BOARD_FAV: "TOGGLE_BOARD_FAV",
  TOGGLE_BOARD_PRIVACY: "TOGGLE_BOARD_PRIVACY"
};
