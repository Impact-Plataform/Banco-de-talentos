import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  margin-left: 20px;
`;
export const Div = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const List = styled.ul`
  list-style: none;
  width: 100%;
`;

export const ListItem = styled.li`
  cursor: pointer;
  margin: 5px 10px;
  padding: 2px;
  font-size: 1rem;
  width: 90%;
  border-bottom: 1px solid purple;
  &.selected {
    color: purple;
  }
`;
