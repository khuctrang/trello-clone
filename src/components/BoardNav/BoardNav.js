import React, { useState } from "react";
import {
  BoardNavWrapper,
  BoardNavMain,
  BoardTitle,
  NavButton,
  BoardStar,
  Divider,
  BoardPriv,
  BoardIcon
} from "./BoardNavStyle";

import { connect } from "react-redux";
import {
  editBoardTitle,
  toggleBoardFav,
  toggleBoardPrivacy
} from "../../actions";

const BoardNav = ({
  boardTitle,
  boardFav,
  boardPriv,
  toggleBoardFav,
  editBoardTitle,
  toggleBoardPrivacy
}) => {
  /* const [liked, setLiked] = useState(false); */
  /* const toggleYellow = () => {
    this.setState(prevState => ({
      starColor: prevState.starColor === "#f2d600" ? "white" : "#f2d600"
    }));
  }; */

  return (
    <BoardNavWrapper>
      <BoardNavMain>
        <BoardTitle>{boardTitle}</BoardTitle>
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
        <NavButton>{/* showmenu */}</NavButton>
      </BoardNavMain>
    </BoardNavWrapper>
  );
};

const mapStateToProps = state => {
  return {
    boardTitle: state.boards["board-0"].title,
    boardFav: state.boards["board-0"].fav,
    boardPriv: state.boards["board-0"].privacy
  };
};

export default connect(mapStateToProps, {
  editBoardTitle,
  toggleBoardFav,
  toggleBoardPrivacy
})(BoardNav);
