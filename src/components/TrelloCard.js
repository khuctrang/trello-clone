import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import TrelloForm from "./TrelloForm";
import { Draggable } from "react-beautiful-dnd";

import { CardContainer, EditButton } from "./TrelloCardStyle";

import { editCard } from "../actions";
import { connect } from "react-redux";

const TrelloCard = ({ text, id, listId, index, editCard }) => {
  /* EDIT FUNCTION */
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(text);

  const closeForm = e => {
    setIsEditing(false);
  };

  const saveCard = e => {
    // redux
    e.preventDefault();
    editCard(id, listId, cardText);
    setIsEditing(false);
  };

  const renderEditForm = () => (
    <TrelloForm
      text={cardText}
      setText={setText}
      closeForm={closeForm}
      actionButtonClicked={saveCard}
    />
  );

  const renderCard = () => {
    return (
      <Draggable draggableId={String(id)} index={index}>
        {provider => (
          <CardContainer
            ref={provider.innerRef}
            {...provider.draggableProps}
            {...provider.dragHandleProps}
            onDoubleClick={() => setIsEditing(true)}
          >
            <Card>
              <EditButton
                onMouseDown={() => setIsEditing(true)}
                fontSize="small"
              >
                edit
              </EditButton>
              <CardContent>
                <Typography gutterBottom>{text}</Typography>
              </CardContent>
            </Card>
          </CardContainer>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
};

export default connect(null, { editCard })(TrelloCard);
