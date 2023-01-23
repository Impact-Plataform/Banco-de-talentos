import styled from "styled-components";
import { colors } from "../styles";

export const Container = styled.div`
  display: inline-block;
  padding: 10px;
  background-color: ${colors.logo.background};
  color: ${colors.logo.letter};
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${colors.logo.letter};
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: ${colors.logo.letter};
    color: ${colors.logo.background};
    opacity: 0.8;
    transition: all 0.3s;
  }
`;
