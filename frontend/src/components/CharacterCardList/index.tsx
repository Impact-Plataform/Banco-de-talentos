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
        const id = character.url
          .split("/")
          .filter((e) => e !== "")
          .pop() as string;

        return (
          <CharacterCard key={character.url} id={id} name={character.name} />
        );
      })}
    </Container>
  );
};
