import styled from "styled-components";

export const Section = styled.section`
  width: 350px;
  height: 350px;
  padding: 10px;
  margin: 15px;
  text-align: center;
  border: 2px solid purple;
  border-radius: 7px;

  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    box-shadow: inset 0 0 0.5em rgb(218, 34, 235);
  }
`;
