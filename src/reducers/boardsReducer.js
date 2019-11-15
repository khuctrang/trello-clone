import { actionTypes } from "../actions";

const initialState = {
  "board-0": {
    id: "board-0",
    lists: ["list-0", "list-1"],
    title: "Default Board"
  }
};

const boardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_LIST: {
      const { boardID, id } = payload;
      const board = state[boardID];
      const newListID = `list-${id}`;
      const newLists = [...board.lists, newListID];
      board.lists = newLists;
      return { ...state, [boardID]: board };
    }

    case actionTypes.DRAG_HAPPENED: {
      /*const { boardID } = payload;
      const board = state[boardID];
      const lists = board.lists;
      const {
        droppableIndexEnd,
        droppableIndexStart,

        type
      } = payload;

      // draggin lists around
      if (type === "list") {
        const pulledOutList = lists.splice(droppableIndexStart, 1);
        lists.splice(droppableIndexEnd, 0, ...pulledOutList);
        board.lists = lists;

        return { ...state, [boardID]: board }; 
      }*/
      return state;
    }
    case actionTypes.DELETE_LIST: {
      const { listID, boardID } = payload;
      const board = state[boardID];
      const lists = board.lists;
      const newLists = lists.filter(id => id !== listID);
      board.lists = newLists;
      return { ...state, [boardID]: board };
    }

    case actionTypes.ADD_BOARD: {
      const { title, id } = payload;
      const newID = `board-${id}`;
      const newBoard = {
        id: newID,
        title,
        lists: []
      };

      return { ...state, [newID]: newBoard };
    }

    default:
      return state;
  }
};

export default boardsReducer;
