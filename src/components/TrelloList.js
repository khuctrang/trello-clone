import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from "./TrelloActionButton";
import { Droppable } from "react-beautiful-dnd";

import { ListContainer } from "./TrelloListStyle";

const TrelloList = ({ title, cards, listId }) => {
  return (
    <Droppable droppableId={String(listId)}>
      {provider => (
        <ListContainer {...provider.droppableProps} ref={provider.innerRef}>
          <h4>{title}</h4>
          {/* <TrelloCard /> */}
          {cards.map((card, index) => (
            <TrelloCard
              key={card.id}
              text={card.text}
              id={card.id}
              index={index}
            />
          ))}

          {provider.placeholder}
          <TrelloActionButton listId={listId} />
        </ListContainer>
      )}
    </Droppable>
  );
};

export default TrelloList;
