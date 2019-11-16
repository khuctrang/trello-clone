import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-left: 20px;
  margin-right: 20px;
  overflow-x: scroll;
  height: 100%;
`;

export const Spacer = styled.div`
  color: transparent;
  height: 8rem;
`;

export const AppWrapper = styled.div`
  text-align: left;
  background-attachment: fixed;
  background-size: cover;

  /* white-space: nowrap; */
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
