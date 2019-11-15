import { actionTypes } from "../actions";
import _ from "lodash";

const initialState = {
  "card-0": {
    text: "A demo card",
    id: `card-0`,
    list: "list-0"
  },
  "card-1": {
    text: "Another demo card",
    id: `card-1`,
    list: "list-0"
  },
  "card-2": {
    text:
      "This is a demo card which is wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwaaaaaaaaaaayyyyyyyyyyyyyyyyyyyyyyy longer",
    id: `card-2`,
    list: "list-1"
  },
  "card-3": {
    text: "Hmm",
    id: `card-3`,
    list: "list-1"
  },
  "card-4": {
    text: "This is hard",
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
      return { ...state, [id]: card };
    }

    case actionTypes.DELETE_CARD: {
      console.log("delete card reducer called");
      const { id } = payload;
      const newState = _.omit(state, [id]);

      return newState;
    }
    default:
      return state;
  }
};

export default cardsReducer;
