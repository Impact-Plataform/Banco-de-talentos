import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { CharacterCard } from './CharacterCard';
import { images } from '../assets/images';

export const CharacterList = () => {
  const { allCharacters } = useContext(CharacterContext);
  return (
    <>
      <div className="card-list-character container">
        {allCharacters.map((character, index) => (
          <CharacterCard
            character={character}
            key={character.name}
            id={index + 1}
            image={images.characters[character.name]}
          />
        ))}
      </div>
    </>
  );
};
