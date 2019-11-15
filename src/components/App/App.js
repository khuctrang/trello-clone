import React, { Component } from "react";
import TrelloList from "../List/TrelloList";
import BoardNav from "../BoardNav/BoardNav";
import TrelloActionButton from "../ActionButton/TrelloActionButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

import { connect } from "react-redux";
import { sort } from "../../actions";

import { Container, Spacer, AppWrapper } from "./AppStyle";

class App extends Component {
  onDragEnd = result => {
    // TODO: reordering logic
    const { destination, source, draggableId, type } = result;

    if (!destination) return; // Drag out of outer components

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  };

  render() {
    const { board, lists, background } = this.props;
    console.log(board);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <AppWrapper
          style={
            background.type == "color"
              ? { backgroundColor: `${background.background}` }
              : { backgroundImage: `url(${background.background})` }
          }
        >
          <BoardNav />
          {/* <Spacer /> */}
          {/* <TrelloList title={"test"} /> */}
          <Droppable droppableId={"boardId"} direction="horizontal" type="list">
            {provider => (
              <Container {...provider.droppableProps} ref={provider.innerRef}>
                {/* lists.map((list, index) => (
                  <TrelloList
                    listId={list.id}
                    key={list.id}
                    title={list.title}
                    cards={list.cards}
                    index={index}
                  />
                )) */}
                {board.lists.map((listId, index) => (
                  <TrelloList listId={listId} key={listId} index={index} />
                ))}
                {provider.placeholder}
                <TrelloActionButton list />
              </Container>
            )}
          </Droppable>
        </AppWrapper>
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  const board = "board-0";
  return {
    lists: Object.values(state.lists),
    board: state.boards["board-0"],
    background: state.boards[board].background
  };
};

export default connect(mapStateToProps /* , { sort } */)(App);
