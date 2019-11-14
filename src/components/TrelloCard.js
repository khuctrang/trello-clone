import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";

import { CardContainer } from "./TrelloCardStyle";

const TrelloCard = ({ text, id, index }) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provider => (
        <CardContainer
          ref={provider.innerRef}
          {...provider.draggableProps}
          {...provider.dragHandleProps}
        >
          <Card>
            <CardContent>
              <Typography gutterBottom>{text}</Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )}
    </Draggable>
  );
};

export default TrelloCard;
