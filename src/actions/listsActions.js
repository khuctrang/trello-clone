import { actionTypes } from ".";

const action = (type, payload) => ({ type, payload });

export const addList = title => {
  return action(actionTypes.ADD_LIST, title);
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
    /* const boardID = getState().activeBoard; */
    dispatch({
      type: actionTypes.DRAG_HAPPENED,
      payload: {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId,
        type
      }
    });
  };
};
