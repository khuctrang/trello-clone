import styled from "styled-components";

export const BoardNavWrapper = styled.div`
  border: 0px;
  border-radius: 0.3rem;
  /* background-color: rgba(255, 255, 255, 0); */
  background: rgba(0, 0, 0, 0.15);
  color: white;
  &:hover {
    background-color: rgba(0, 0, 0, 0.35);
  }
  padding: 0.5rem;
  /* position: absolute;
  left: 0;
  top: 0; */
  margin-bottom: 20px;
`;

export const BoardNavMain = styled.div`
  min-height: 30px;
  /* width: 50%; */
  /* background: rgba(0, 0, 0, 0.15); */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  /* margin: 20px 0; */
  z-index: 3;
`;

export const NavButton = styled.button`
  border: 0px;
  outline: none;
  border-radius: 0.3rem;
  background-color: rgba(255, 255, 255, 0);
  color: white;
  padding: 0.4rem;
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
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.8rem;
`;

export const Divider = styled.span`
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  height: 1.6rem;
`;
