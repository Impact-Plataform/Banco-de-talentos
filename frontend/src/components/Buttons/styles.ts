import styled from "styled-components";
import { colors } from "../styles";

interface ContainerBaseProps {
  letterColor: string;
}

const ContainerBase = styled.div<ContainerBaseProps>`
  display: inline-block;
  padding: 10px;
  background-color: transparent;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  :hover {
    background-color: ${(props) => props.letterColor};
    color: ${colors.logo.background};
    transition: all 0.3s;
  }
  @media (max-width: 760px) {
    padding: 8px;
  }
  @media (max-width: 480px) {
    padding: 6px;
  }
  @media (max-width: 360px) {
    padding: 4px;
  }
  @media (max-width: 280px) {
    padding: 2px;
  }
`;

export const Container = styled(ContainerBase)`
  color: ${colors.logo.letter};
  border: 1px solid ${colors.logo.letter};
`;

export const Container1 = styled(ContainerBase)`
  color: ${colors.logo.letter1};
  border: 1px solid ${colors.logo.letter1};
`;
