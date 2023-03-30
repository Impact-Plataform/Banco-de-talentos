import { CharactersContainer, CharacterList, Character, CharacterName, CharacterInfo } from "./styles";

import { Link } from "react-router-dom";

import { formatHeight } from "../../utils/formatHeight";

export const CharacterCard = ({ characters }) => {
  return (
    <>
      <CharactersContainer>
        <CharacterList>
          {characters.map((character) => (
            <Link key={character.name} to={`/character/${character.name.replace(/\s+/g, "-").toLowerCase()}`}>
              <Character key={character.name}>
                <CharacterName>{character.name}</CharacterName>
                <CharacterInfo>Altura: {formatHeight(character.height)}m</CharacterInfo>
                <CharacterInfo>Peso: {character.mass}Kg</CharacterInfo>
              </Character>
            </Link>
          ))}
        </CharacterList>
      </CharactersContainer>
    </>
  );
};
