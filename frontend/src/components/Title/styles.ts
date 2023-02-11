import styled from "styled-components";
import { colors } from "../styles";

const Starjhol = require("./letter/Starjhol.ttf");

export const Container = styled.h2`
  font-family: Starjhol;
  src: url(${Starjhol}) format("truetype");
  font-size: 40px;
  text-align: center;
  color: ${colors.logo.letter};
  margin-bottom: 30px;
  text-shadow: 3px 3px ${colors.logo.background};
  
  @media (max-width: 760px) {
    font-size: 32px;
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
  }
  
  @media (max-width: 360px) {
    font-size: 20px;
  }
  
  @media (max-width: 280px) {
    font-size: 18px;
  }
`;

