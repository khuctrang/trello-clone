import styled from "styled-components";
import { Icon } from "@material-ui/core";

export const BoardNavWrapper = styled.div`
  width: 100ww;
  border: 0px;
  border-radius: 0.3rem;
  background: rgba(0, 0, 0, 0.15);
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
  }
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoardNavMain = styled.div`
  min-height: 43px;
  display: flex;
  align-items: center;
  z-index: 3;
`;

export const NavButton = styled.button`
  border: 0px;
  outline: none;
  border-radius: 0.3rem;
  background-color: rgba(255, 255, 255, 0.4);
  color: white;
  padding: 0.4rem 1rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

export const BoardStar = styled(NavButton)`
  /* padding: 1.1rem; */
  font-size: 0.8rem;
  background-color: rgba(255, 255, 255, 0);
`;

export const BoardTitle = styled(NavButton)`
  font-size: 1.4rem;
  font-weight: 700;
  background-color: transparent;
`;

export const Divider = styled.span`
  width: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1.6rem;
  margin: 0 10px;
`;

export const BoardPriv = styled(NavButton)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 110px;
`;

export const BoardIcon = styled(Icon)`
  font-size: 1.3rem !important;
`;

export const StyledInput = styled.input`
  border: none;
  outline-color: blue;
  box-sizing: border-box;
  font-size: 1.3rem;
  border-radius: 0.3rem;
  padding: 0.4rem 1rem;
  margin-left: 10px;
  width: auto;
`;
