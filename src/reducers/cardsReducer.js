import { actionTypes } from "../actions";
import _ from "lodash";

const initialState = {
  "card-0": {
    text: "Scroll to see other lists on this board.",
    id: `card-0`,
    list: "list-0"
  },
  "card-1": {
    text: "Click and drag a card or list to move it around. Try now!",
    id: `card-1`,
    list: "list-0"
  },
  "card-2": {
    text:
      "Double click on this card or click on the pen icon to edit its content.",
    id: `card-2`,
    list: "list-0"
  },
  "card-3": {
    text:
      "Make mistakes? You can delete any cards in a instance. Be careful tho!",
    id: `card-3`,
    list: "list-0"
  },
  "card-5": {
    text: "This is my email btw khuctrang1812@gmail.com",
    id: `card-5`,
    list: "list-0"
  },
  "card-7": {
    text: "Try Background Settings on the top right of the page.",
    id: `card-7`,
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
