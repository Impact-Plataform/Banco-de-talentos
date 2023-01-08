import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 90%;
  margin-left: 20px;
  background-color: rgba(218, 34, 235, 0.1);
  box-shadow: inset 0 0 1em rgba(218, 34, 235);
  border-radius: 5px;
  @media screen and (max-width: 728px) {
    position: fixed;
    background-color: #2e1c31;
    overflow-y: scroll;
    overflow-x: hidden;
    z-index: 2;
    height: 500px;
    width: 80%;
    left: 10px;
    display: none;
  }
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
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const ListItem = styled.li`
  cursor: pointer;
  margin: 5px 10px;
  padding: 2px;
  font-size: 1rem;
  width: 90%;
  border-bottom: 1px solid purple;
  &.selected {
    color: rgba(218, 34, 235);
  }
  &:hover {
    color: rgba(218, 34, 235);
  }
`;

export const Button = styled.button`
  width: 84px;
  height: 40px;
  padding: 5px;
  margin: 4px;
  cursor: pointer;
  &:hover {
    background-color: purple;
    color: white;
  }
  @media screen and (max-width: 728px) {
    &:hover {
      background-color: white;
      color: black;
    }
  }
`;
export const ButtonShowFilters = styled.button`
  position: fixed;
  display: none;
  cursor: pointer;
  height: 40px;
  width: 30px;
  color: white;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: inset 0 0 1em rgba(218, 34, 235);
  @media screen and (max-width: 728px) {
    display: inherit;
    top: calc(50%);
  }
`;
export const ContainerFiltros = styled.section`
  display: flex;
`;
