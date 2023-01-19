import { v4 as uuidv4 } from 'uuid';
import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { CharacterCard } from '../components/CharacterCard';
import { CharacterContext } from '../context/CharacterContext';
import { toCapitalize } from '../helpers/helper';

export const SearchPage = () => {
  const location = useLocation();
  const { allCharacters } = useContext(CharacterContext);
  // capitaliza o nome
  const characterName = toCapitalize(location.state);

  const filteredCharacters = allCharacters.filter(character => character.name.includes(characterName));
  console.log('filtered', filteredCharacters);

  return (
    <div className="container">
      <p>
        <span>
          <strong>{filteredCharacters.length}</strong>{' '}
          {filteredCharacters.length < 2 ? 'character' : 'characters'}
        </span>
      </p>
      <div className="grid-characters container">
        {filteredCharacters.map((character, index) => (
          <CharacterCard character={character} key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};
