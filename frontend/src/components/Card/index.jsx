import { useCharactersContext } from "../../contexts";

export const Card = () => {
  const { characters } = useCharactersContext();

  return (
    <div>
      {characters.map((character) => (
        <p key={character.url}>{character.name}</p>
      ))}
    </div>
  );
};

export default Card;
