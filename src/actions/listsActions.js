import { actionTypes, action } from ".";
import uuid from "uuidv4";

export const addList = title => (dispatch, getState) => {
  /* const boardId = getState().activeBoard; */
  const boardId = "board-0";
  const id = uuid();
  dispatch(action(actionTypes.ADD_LIST, { title, boardId, id }));
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
  type
) => {
  return (dispatch, getState) => {
    /* const boardId = getState().activeBoard; */
    const boardId = "board-0";
    dispatch(
      action(actionTypes.DRAG_HAPPENED, {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type,
        boardId
      })
    );
  };
};

export const editListTitle = (listId, newTitle) =>
  action(actionTypes.EDIT_LIST_TITLE, { listId, newTitle });

export const deleteList = listId => {
  /* const boardId = getState().activeBoard; */
  const boardId = "board-0";
  return action(actionTypes.DELETE_LIST, { listId, boardId });
};
