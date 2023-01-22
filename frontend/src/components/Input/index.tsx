import { Container, InputStyled } from "./styles";
import { InputInterface } from "./interface";

export const Input = ({onChange, placeholder}:InputInterface) => {
  return (
    <Container>
      <InputStyled placeholder={placeholder} onChange={onChange}/>
    </Container>
  );
};
