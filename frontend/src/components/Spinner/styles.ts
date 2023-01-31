import { colors } from "./../styles/index";
import styled, { keyframes } from "styled-components";

const rotate = keyframes` 
0%{
    transform: rotate(0deg)
}
100%{
    transform: rotate(360deg)
}
`;

export const Container = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 6px solid ${colors.spinner.circle};
  border-bottom-color: ${colors.logo.letter} ;
  animation: ${rotate} 1s linear infinite;
`;
