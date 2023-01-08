import styled from "styled-components";

export const Section = styled.section`
  background-color: #1c1e21;
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Cards = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  align-content: flex-start;
  @media screen and (max-width: 728px) {
    flex-direction: column;
    align-content: center;
  }
`;

export const ContainerCards = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const Container = styled.section`
  display: flex;
  width: 100%;
`;
export const Button = styled.button`
  width: 40px;
  height: 30px;
  padding: 5px;
  margin: 4px;
  cursor: pointer;
  &:hover {
    background-color: purple;
    color: white;
  }
  &.clicked {
    background-color: purple;
    color: white;
  }
`;

export const Pages = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;
