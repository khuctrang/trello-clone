import { actionTypes } from "../actions";

const initialState = {
  "card-0": {
    text: "This is a demo card",
    id: `card-0`,
    list: "list-0"
  },
  "card-1": {
    text: "This is a demo card",
    id: `card-1`,
    list: "list-0"
  },
  "card-2": {
    text: "This is a demo card",
    id: `card-2`,
    list: "list-1"
  },
  "card-3": {
    text: "This is a demo card",
    id: `card-3`,
    list: "list-1"
  },
  "card-4": {
    text: "This is a demo card",
    id: `card-4`,
    list: "list-1"
  }
};

const cardsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CARD: {
      const { text, listID, id } = payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case actionTypes.EDIT_CARD: {
      const { id, newText } = payload;
      const card = state[id];
      card.text = newText;
      return { ...state, [`card-${id}`]: card };
    }

    case actionTypes.DELETE_CARD: {
      const { id } = payload;
      const newState = state;
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;
