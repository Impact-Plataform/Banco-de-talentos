import styled from "styled-components";
import { colors } from "../../components/styles";
import img from "./img/mtfbwy.jpg";

export const ButtonContainer = styled.div`
  position: absolute;
  margin: 50px 0 0 120px;

  @media (max-width: 760px) {
    margin: 40px 0 0 100px;
  }

  @media (max-width: 480px) {
    margin: 35px 0 0 90px;
  }

  @media (max-width: 360px) {
    margin: 30px 0 0 80px;
  }

  @media (max-width: 280px) {
    margin: 25px 0 0 70px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${colors.logo.background};
  height: 100vh;

  @media (max-width: 1025px) {
    background-size: 97%;
  }


  @media (max-width: 900px) {
    background-image: none;
  }

`;

export const CharacterInfo = styled.div`
  display: inline-block;
  padding: 25px;
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

  @media (max-width: 800px) {
    padding: 23px;;
  }

`;

export const InfoDiv = styled.div`
  margin-bottom: 10px;

  @media (max-width: 900px) {
    margin-bottom: 6px;
  }

  @media (max-width: 800px) {
    margin-bottom: 5px;
  }

  @media (max-width: 700px) {
    margin-bottom: 4px;
  }

  @media (max-width: 600px) {
    margin-bottom: 3px;
  }
`;
