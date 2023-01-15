import { CharacterCard } from "../CharacterCard";

type CharacterType = { name: string; url: string };

interface CharacterCardListInterface {
  characters: CharacterType[];
}

export const CharacterCardList = ({
  characters,
}: CharacterCardListInterface) => {
  return (
    <>
      {characters.map((character) => {
        return <CharacterCard key={character.url} name={character.name} />;
      })}
    </>
  );
};
