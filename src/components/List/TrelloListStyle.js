import styled from "styled-components";
import Icon from "@material-ui/core/Icon";

export const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin: 0 8px 0 0;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const DeleteButton = styled(Icon)`
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  opacity: 0.4;
  &:hover {
    opacity: 0.8;
  }
`;

export const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;
