import React, { useState } from "react";
import {
  BoardNavWrapper,
  BoardNavMain,
  BoardTitle,
  NavButton,
  BoardStar,
  Divider,
  BoardPriv,
  BoardIcon,
  StyledInput
} from "./BoardNavStyle";

import { FormEdit } from "../List/TrelloListStyle";

import { connect } from "react-redux";
import {
  editBoardTitle,
  toggleBoardFav,
  toggleBoardPrivacy
} from "../../actions";
import BoardMenu from "../BoardMenu/BoardMenu";

const BoardNav = ({
  _boardTitle,
  boardFav,
  boardPriv,
  toggleBoardFav,
  editBoardTitle,
  toggleBoardPrivacy
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [boardTitle, setBoardTitle] = useState(_boardTitle);

  const renderEditInput = () => {
    return (
      <FormEdit onSubmit={handleFinishEditing}>
        <StyledInput
          type="text"
          value={boardTitle}
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
    setBoardTitle(e.target.value);
  };

  const handleFinishEditing = e => {
    setIsEditing(false);
    editBoardTitle("board-0", boardTitle);
  };

  return (
    <BoardNavWrapper>
      <BoardNavMain>
        {isEditing ? (
          renderEditInput()
        ) : (
          <BoardTitle onClick={() => setIsEditing(true)}>
            {boardTitle}
          </BoardTitle>
        )}

        <BoardStar onClick={toggleBoardFav}>
          {/* start */}
          <BoardIcon>{boardFav ? "star" : "star_border"}</BoardIcon>
        </BoardStar>
        <Divider />
        <NavButton>{"Dream Team"}</NavButton>
        <Divider />

        {boardPriv ? (
          <BoardPriv onClick={toggleBoardPrivacy}>
            <BoardIcon>lock</BoardIcon>
            Private
          </BoardPriv>
        ) : (
          <BoardPriv onClick={toggleBoardPrivacy}>
            <BoardIcon>lock_open</BoardIcon>
            Public
          </BoardPriv>
        )}

        <Divider />
        <BoardMenu />
      </BoardNavMain>
    </BoardNavWrapper>
  );
};

const mapStateToProps = state => {
  return {
    _boardTitle: state.boards["board-0"].title,
    boardFav: state.boards["board-0"].fav,
    boardPriv: state.boards["board-0"].privacy
  };
};

export default connect(mapStateToProps, {
  editBoardTitle,
  toggleBoardFav,
  toggleBoardPrivacy
})(BoardNav);
