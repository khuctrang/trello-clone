import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";

import { ListContainer } from "./TrelloListStyle";

const TrelloList = ({ title, cards, listId, index }) => {
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
                {cards.map((card, index) => (
                  <TrelloCard
                    key={card.id}
                    text={card.text}
                    id={card.id}
                    index={index}
                    listId={listId}
                  />
                ))}

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

export default TrelloList;
