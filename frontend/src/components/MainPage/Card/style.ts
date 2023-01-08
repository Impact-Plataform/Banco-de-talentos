import styled from "styled-components";

export const Section = styled.section`
  width: 350px;
  height: 300px;
  padding: 10px;
  margin: 15px;
  text-align: center;
  border: 2px solid purple;
  border-radius: 7px;
  box-shadow: inset 0 0 1em rgba(218, 34, 235);
  background-color: rgba(218, 34, 235, 0.1);
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: inset 0 0 0.5em rgb(218, 34, 235);
  }
  @media screen and (max-width: 728px) {
    width: 70%;
  }
`;
