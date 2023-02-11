import styled from "styled-components";
import { colors } from "../styles";

export const Container = styled.div`
  display: inline-block;
  width: 200px;
  padding: 10px;
  border-radius: 25px;
  background-color: transparent;
  color: ${colors.logo.letter};
  border: 2px solid ${colors.logo.letter};
  opacity: 0.5;
  text-align: center;
  user-select: none;
  cursor: pointer;
  :hover {
    background-color: ${colors.logo.background};
    color: ${colors.logo.letter};
    border: 2px solid ${colors.logo.letter};
    opacity: 1;
    transition: all 0.3s;
  }
  @media (max-width: 768px) {
    padding: 5px;
    border-radius: 20px;
  }
  @media (max-width: 480px) {
    padding: 2px;
    border-radius: 15px;
  }
`;
