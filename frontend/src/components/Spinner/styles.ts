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
  border-bottom-color: ${colors.logo.letter};
  animation: ${rotate} 1s linear infinite;
  
  @media (max-width: 760px) {
    width: 100px;
    height: 100px;
  }
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
  @media (max-width: 360px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 280px) {
    width: 50px;
    height: 50px;
  }
`;
