import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { Loader } from './Loader';
import { CharacterCard } from './CharacterCard';
import { images } from '../assets/images';

export const CharacterList = () => {
  const { allCharacters, loading } = useContext(CharacterContext);
  console.log('loading', loading);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
      )}
    </>
  );
};
