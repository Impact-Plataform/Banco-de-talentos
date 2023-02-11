import { colors } from "./../styles/index";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${colors.logo.letter};
  border-radius: 5px;
  text-align: center;

  @media (max-width: 760px) {
    width: 140px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }

  @media (max-width: 360px) {
    width: 100px;
  }

  @media (max-width: 280px) {
    width: 80px;
  }
`;

export const InputStyled = styled.input`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: bold;
  color: ${colors.logo.letter};
  background-color: transparent;
  width: 100%auto;


  @media (max-width: 760px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }

  @media (max-width: 360px) {
    font-size: 8px;
  }

  @media (max-width: 280px) {
    font-size: 6px;
  }
`;

