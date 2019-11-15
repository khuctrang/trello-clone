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
      const { boardId, id } = payload;
      const board = state[boardId];
      const newListId = `list-${id}`;
      const newLists = [...board.lists, newListId];
      board.lists = newLists;
      return { ...state, [boardId]: board };
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
      const { listId, boardId } = payload;
      const board = state[boardId];
      const lists = board.lists;
      const newLists = lists.filter(id => id !== listId);
      board.lists = newLists;
      return { ...state, [boardId]: board };
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
