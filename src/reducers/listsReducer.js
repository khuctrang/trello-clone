import { actionTypes } from "../actions";

const initialState = {
  "list-0": {
    title: "Last Episode",
    id: "list-0",
    cards: [
      {
        id: 0,
        text: "xxxxxxxxxxxxxxxxxxx"
      },
      {
        id: 1,
        text: "yyyyyyyyyyy"
      }
    ]
  },
  "list-1": {
    title: "Another Episode",
    id: "list-1",
    cards: [
      {
        id: 2,
        text: "another xxxxxxxxxxxxxxxxxxx"
      },
      {
        id: 3,
        text: "another yyyyyyyyyyy"
      },
      {
        id: 4,
        text: "another yyyyyyyyyyy"
      }
    ]
  }
};
let listId = 1;
let cardId = 5;

const listsReducer = (state = initialState, { type, payload }) => {
  console.log("type");
  console.log(type);

  switch (type) {
    /* ADD_LIST */
    case actionTypes.ADD_LIST:
      /* console.log("state");
      console.log(state); */

      ++listId;
      const newList = title => {
        return { title, cards: [], id: `list-${listId}` };
      };
      return { ...state, [`list-${listId}`]: newList(payload) };

    /* ADD_CARD */
    case actionTypes.ADD_CARD: {
      /*       console.log("state");
      console.log(state); */
      const { text, listId } = payload;
      const newCard = {
        id: cardId,
        text: text
      };
      ++cardId;
      const list = state[listId];
      list.cards.push(newCard);

      return { ...state, [listId]: list };
    }

    /* DRAG_HAPPENED */
    case actionTypes.DRAG_HAPPENED:
      /* console.log("state");
      console.log(state); */
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

    /* EDIT_CARD */
    case actionTypes.EDIT_CARD: {
      const { id, listId, newText } = payload;
      console.log("id");
      console.log(id);
      console.log("listId");
      console.log(listId);
      console.log("newText");
      console.log(newText);
      const list = state[listId];
      const newCards = list.cards.map(card => {
        if (card.id === id) {
          card.text = newText;
          return card;
        }
        return card;
      });
      list.cards = newCards;
      return { ...state, [listId]: list };
    }

    default:
      return state;
  }
};

export default listsReducer;
