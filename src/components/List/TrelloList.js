import React, { useEffect } from "react";
import TrelloCard from "../Card/TrelloCard";
import TrelloActionButton from "../ActionButton/TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { ListContainer } from "./TrelloListStyle";

const TrelloList = ({ title, cards, listId, index, cardList }) => {
  console.log(cards);
  /* console.log(cardList); */
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provider => (
        <ListContainer
          {...provider.draggableProps}
          ref={provider.innerRef}
          {...provider.dragHandleProps}
        >
          <Droppable droppableId={String(listId)} type="card">
            {provider => (
              <div {...provider.droppableProps} ref={provider.innerRef}>
                <h4>{title}</h4>
                {cards.map((cardId, index) => {
                  const card = cardList[cardId];
                  return (
                    <TrelloCard
                      key={card.id}
                      text={card.text}
                      id={card.id}
                      index={index}
                      listId={listId}
                    />
                  );
                })}

                {provider.placeholder}
                <TrelloActionButton listId={listId} />
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
    </Draggable>
  );
};

const mapStateToProps = state => {
  return { cardList: state.cards };
};

export default connect(mapStateToProps)(TrelloList);
