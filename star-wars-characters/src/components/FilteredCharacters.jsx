import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { CharacterCard } from './CharacterCard';

export const FilteredCharacters = () => {
  const { filteredCharacters } = useContext(CharacterContext);

  return (
    <div className="container grid-characters">
      {filteredCharacters.map(character => (
        <CharacterCard character={character} key={uuidv4()} />
      ))}
    </div>
  );
};
