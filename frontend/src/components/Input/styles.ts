import { colors } from "./../styles/index";
import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 200px;
  background-color: ${colors.logo.letter};
  border: 2px solid ${colors.logo.background};
  border-radius: 5px;
`;

export const InputStyled = styled.input`
  border: none;
  outline: none;
  background-color: transparent;
  width: 100%auto;
`;
