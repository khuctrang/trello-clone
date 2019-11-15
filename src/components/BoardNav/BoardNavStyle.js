import styled from "styled-components";

export const BoardNavWrapper = styled.div`
  border: 0px;
  border-radius: 0.3rem;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  padding: 0.4rem;
  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
  }
`;

export const BoardNav = styled.div`
  min-height: 30px;
  width: 100%;
  background: rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  padding: 0.8rem;
  margin: 20px 0;
  z-index: 3;
  transform: translateX(-10px);
`;

export const BoardTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  padding: 0.8rem;
`;
