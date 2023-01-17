import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination';

export const CharacterList = () => {
  const { allCharacters, filteredCharacters } = useContext(CharacterContext);

  // Logica das paginas
  const totalCharacters = allCharacters.length;
  const [characterPerPage, setCharacterPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * characterPerPage;
  const firstIndex = lastIndex - characterPerPage;
  console.log('recebi', filteredCharacters);
  return (
    <>
      <div className="character-list container">
        {filteredCharacters.length ? (
          <>
            {filteredCharacters.map(character => (
              <CharacterCard character={character} key={uuidv4()} />
            ))}
          </>
        ) : (
          <>
            {allCharacters
              .map(character => <CharacterCard character={character} key={uuidv4()} />)
              .slice(firstIndex, lastIndex)}
          </>
        )}
      </div>
      <Pagination
        characterPerPage={characterPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCharacters={totalCharacters}
      />
    </>
  );
};
