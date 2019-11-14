import React, { Component } from "react";
import TrelloList from "./TrelloList";
import TrelloActionButton from "./TrelloActionButton";
import { DragDropContext } from "react-beautiful-dnd";

import { connect } from "react-redux";
import { sort } from "../actions";

import { Container } from "./AppStyle";

class App extends Component {
  onDragEnd = result => {
    // TODO: reordering logic
    const { destination, source, draggableId } = result;

    if (!destination) return; // Drag out of outer components

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId
      )
    );
  };

  render() {
    const { lists } = this.props;
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <div>
          <h2>Hello Hanoi</h2>
          {/* <TrelloList title={"test"} /> */}
          <Container>
            {lists.map(list => (
              <TrelloList
                listId={list.id}
                key={list.id}
                title={list.title}
                cards={list.cards}
              />
            ))}
            <TrelloActionButton list />
          </Container>
        </div>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { lists: Object.values(state.lists) };
};

export default connect(mapStateToProps /* , { sort } */)(App);
