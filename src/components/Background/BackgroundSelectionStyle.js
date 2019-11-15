import styled from "styled-components";

const Selection = styled.div`
  height: 100px;
  width: 100px;
  color: white !important;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  display: inline-block;
  margin: 10px;
  background-size: cover;
  border-radius: 5px;
`;

export const ColorSelection = styled(Selection)`
  background-color: ${props => props.bg};
`;

export const ImageSelection = styled(Selection)`
  background-image: url(${props => props.bg});
  width: 180px;
  height: 120px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
`;
