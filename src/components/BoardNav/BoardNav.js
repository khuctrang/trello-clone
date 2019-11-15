import React from "react";
import { BoardNavWrapper, BoardTitle } from "./BoardNavStyle";

const BoardNav = ({}) => {
  const toggleYellow = () => {
    this.setState(prevState => ({
      starColor: prevState.starColor === "#f2d600" ? "white" : "#f2d600"
    }));
  };

  return (
    <BoardNavWrapper>
      <BoardNav>
        <BoardTitle>Hello World</BoardTitle>
      </BoardNav>
    </BoardNavWrapper>
  );
};
export default BoardNav;
