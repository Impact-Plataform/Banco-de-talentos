import styled from "styled-components";
import { colors } from "../../components/styles";
import img from "./img/mtfbwy.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-position: center;
  background-size: 90%;
  background-repeat: no-repeat;
  background-color: ${colors.logo.letter1};
  height: 100vh;
`;

export const CharacterInfo = styled.div`
  display: inline-block;
  padding: 30px;
  background-color: transparent;
  color: ${colors.logo.letter1};
  text-align: center;
  border-radius: 5px;
  border: 1px solid ${colors.logo.letter1};
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: ${colors.logo.letter1};
    color: ${colors.logo.background};
    opacity: 0.8;
    border: none;
    transition: all 0.3s;
  }
`;

export const InfoDiv = styled.div`
  margin-bottom: 10px;
`;
