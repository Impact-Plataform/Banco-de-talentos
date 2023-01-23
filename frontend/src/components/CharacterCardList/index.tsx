import { CharacterCard } from "../CharacterCard";
import { Container } from "./styles";

type CharacterType = { name: string; url: string };

interface CharacterCardListInterface {
  characters: CharacterType[];
}

export const CharacterCardList = ({
  characters,
}: CharacterCardListInterface) => {
  return (
    <Container>
      {characters.map((character) => {
        return <CharacterCard key={character.url} name={character.name} />;
      })}
    </Container>
  );
};
