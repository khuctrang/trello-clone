import { actionTypes } from "../actions";
import _ from "lodash";

const initialState = {
  "list-0": {
    title: "Last Episode",
    id: "list-0",
    cards: ["card-0", "card-1"]
  },
  "list-1": {
    title: "Another Episode",
    id: "list-1",
    cards: ["card-2", "card-3", "card-4"]
  }
};

const listsReducer = (state = initialState, { type, payload }) => {
  console.log("type");
  console.log(type);

  switch (type) {
    /* ADD_LIST */
    case actionTypes.ADD_LIST:
      const { title, id } = payload;
      const newList = { title, id: `list-${id}`, cards: [] };
      return { ...state, [`list-${id}`]: newList };

    /* ADD_CARD */
    case actionTypes.ADD_CARD: {
      const { id, listId } = payload;
      const list = state[listId];
      list.cards.push(`card-${id}`);
      return { ...state, [listId]: list };
    }

    /* DRAG_HAPPENED */
    case actionTypes.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        type
      } = payload;
      console.log(type);

      // dragging lists
      if (type === "list") {
        return state;
      }

      // dragging cards
      // in the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state[droppableIdStart];
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
        return { ...state, [droppableIdStart]: list };
      }

      // other list
      if (droppableIdStart !== droppableIdEnd) {
        // find the list where the drag happened
        const listStart = state[droppableIdStart];
        // pull out the card from this list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        // find the list where the drag ended
        const listEnd = state[droppableIdEnd];

        // put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
        return {
          ...state,
          [droppableIdStart]: listStart,
          [droppableIdEnd]: listEnd
        };
      }
      return state;

    /* DELETE_CARD */
    case actionTypes.DELETE_CARD: {
      const { listId, id } = payload;

      const list = state[listId];
      const newCards = list.cards.filter(cardId => cardId !== id);

      return { ...state, [listId]: { ...list, cards: newCards } };
    }

    /* DELETE_LIST_TITLE */
    case actionTypes.EDIT_LIST_TITLE: {
      const { listId, newTitle } = payload;

      const list = state[listId];
      list.title = newTitle;
      return { ...state, [listId]: list };
    }

    /* DELETE_LIST */
    case actionTypes.DELETE_LIST: {
      console.log("ahihihih");
      const { listId } = payload;
      const newState = _.omit(state, [listId]);
      return newState;
    }

    default:
      return state;
  }
};

export default listsReducer;
