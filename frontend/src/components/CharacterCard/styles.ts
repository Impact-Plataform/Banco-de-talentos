import styled from "styled-components";
import { colors } from "../styles";

export const Container = styled.div`
  display: inline-block;
  width: 200px;
  padding: 10px;
  border-radius: 30px;
  background-color: transparent;
  color: ${colors.logo.letter};
  border: 2px solid ${colors.logo.letter};
  opacity: 0.4;
  text-align: center;
  user-select: none;
  cursor: pointer;
  :hover {
    background-color: ${colors.logo.background};
    color: ${colors.logo.letter};
    border: 2px solid ${colors.logo.letter};
    opacity: 1 ;
    transition: all 0.3s;
  }
`;
