import { CharacterCardInterface } from "./interface";
import { Container } from "./styles";

export const CharacterCard = ({name}: CharacterCardInterface) => {
  return <Container>{name}</Container>;
};
