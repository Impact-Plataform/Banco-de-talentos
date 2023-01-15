import styled from "styled-components";
import { colors } from "../styles";

export const Container = styled.div`
  display: inline-block;
  width: 250px;
  padding: 10px;
  border-radius: 30px;
  background-color: ${colors.logo.background};
  color: ${colors.logo.letter};
  text-align: center;
  user-select: none;
`;
