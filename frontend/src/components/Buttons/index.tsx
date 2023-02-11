import { Container, Container1 } from "./styles";
import { ButtonInterface } from "./interface";
import { colors } from "../styles";

export const Button = ({ text, onClick }: ButtonInterface) => {
  return (
    <Container letterColor={colors.logo.letter} onClick={onClick}>
      {text}
    </Container>
  );
};

export const Button1 = ({ text, onClick }: ButtonInterface) => {
  return (
    <Container1 letterColor={colors.logo.letter1} onClick={onClick}>
      {text}
    </Container1>
  );
};
