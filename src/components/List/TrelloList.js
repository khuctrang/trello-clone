import React, { useState, useEffect } from "react";
import TrelloCard from "../Card/TrelloCard";
import TrelloActionButton from "../ActionButton/TrelloActionButton";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { connect } from "react-redux";

import { editListTitle, deleteList } from "../../actions";

import {
  ListContainer,
  TitleContainer,
  DeleteButton,
  ListTitle,
  StyledInput,
  FormEdit
} from "./TrelloListStyle";

const TrelloList = ({
  title,
  cards,
  listId,
  index,
  cardList,
  deleteList,
  editListTitle,
  dispatch
}) => {
  console.log(cards);
  /* console.log(cardList); */

  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditInput = () => {
    return (
      <FormEdit onSubmit={handleFinishEditing}>
        <StyledInput
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </FormEdit>
    );
  };

  const handleFocus = e => {
    console.log("hi");

    /* e.target.select(); */
  };

  const handleChange = e => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = e => {
    setIsEditing(false);
    editListTitle(listId, listTitle);
  };

  const handleDeleteList = () => {
    deleteList(listId);
  };

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
                {isEditing ? (
                  renderEditInput()
                ) : (
                  <TitleContainer onClick={() => setIsEditing(true)}>
                    <ListTitle>{listTitle}</ListTitle>
                    <DeleteButton onClick={handleDeleteList}>
                      delete
                    </DeleteButton>
                  </TitleContainer>
                )}
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

const mapStateToProps = (state, ownProps) => {
  const { listId } = ownProps;
  const list = state.lists[listId];
  return { cardList: state.cards, cards: list.cards, title: list.title };
};

export default connect(mapStateToProps, { deleteList, editListTitle })(
  TrelloList
);
