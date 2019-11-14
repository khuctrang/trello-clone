import { actionTypes } from "../actions";

const initialState = [
  {
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
  {
    title: "Another Episode",
    id: 1,
    cards: [
      {
        id: 0,
        text: "another xxxxxxxxxxxxxxxxxxx"
      },
      {
        id: 1,
        text: "another yyyyyyyyyyy"
      },
      {
        id: 3,
        text: "another yyyyyyyyyyy"
      }
    ]
  }
];

let listId = 1;
let cardId = 4;

const listsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_LIST:
      const newList = title => {
        ++listId;
        return { title, cards: [], id: listId };
      };
      return [...state, newList(payload)];

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

    default:
      return state;
  }
};

export default listsReducer;
