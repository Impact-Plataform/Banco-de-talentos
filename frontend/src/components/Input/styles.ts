import { colors } from "./../styles/index";
import styled from "styled-components";

export const Container = styled.div`
  display: inline-block;
  width: 180px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${colors.logo.letter};
  border-radius: 5px;
`;

export const InputStyled = styled.input`
  text-align: center;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.logo.letter};
  background-color: transparent;
  width: 100%auto;
`;
