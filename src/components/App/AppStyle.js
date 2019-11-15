import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Spacer = styled.div`
  color: transparent;
  height: 8rem;
`;

export const AppWrapper = styled.div`
  text-align: left;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  /* white-space: nowrap; */
  overflow-x: scroll;
`;
