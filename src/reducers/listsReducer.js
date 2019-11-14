import { actionTypes } from "../actions";

const initialState = {
  0: {
    title: "Last Episode",
    id: 0,
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
  1: {
    title: "Another Episode",
    id: 1,
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
  switch (type) {
    case actionTypes.ADD_LIST:
      const newList = title => {
        ++listId;
        return { title, cards: [], id: listId };
      };
      return { ...state, ...newList(payload) };

    case actionTypes.ADD_CARD:
      const newCard = {
        id: cardId,
        text: payload.text
      };
      ++cardId;
      const newState = state.map(list => {
        if (list.id === payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        }
        return list;
      });
      return newState;

    case actionTypes.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId
      } = payload;

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

    default:
      return state;
  }
};

export default listsReducer;
