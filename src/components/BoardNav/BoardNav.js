import React, { useState } from "react";
import {
  BoardNavWrapper,
  BoardNavMain,
  BoardTitle,
  NavButton,
  BoardStar,
  Divider
} from "./BoardNavStyle";
import { Icon } from "@material-ui/core";

import { connect } from "react-redux";
import { editBoardTitle, toggleBoardFav } from "../../actions";

const BoardNav = ({ boardTitle, boardFav, toggleBoardFav, editBoardTitle }) => {
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
          <Icon>{boardFav ? "star" : "star_border"}</Icon>
        </BoardStar>
        <Divider />
        <NavButton>{/* team name */}</NavButton>
        <Divider />
        <NavButton>{/* private/public */}</NavButton>
        <Divider />
        <NavButton>{/* showmenu */}</NavButton>
      </BoardNavMain>
    </BoardNavWrapper>
  );
};

const mapStateToProps = state => {
  return {
    boardTitle: state.boards["board-0"].title,
    boardFav: state.boards["board-0"].fav
  };
};

export default connect(mapStateToProps, { editBoardTitle, toggleBoardFav })(
  BoardNav
);
