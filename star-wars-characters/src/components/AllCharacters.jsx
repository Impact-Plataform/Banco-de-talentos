import { v4 as uuidv4 } from 'uuid';
import React, { useContext, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination';

export const AllCharacters = () => {
  const { allCharacters } = useContext(CharacterContext);
  const [characterPerPage, setCharacterPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  // calcula a paginação geral
  const totalCharacters = allCharacters.length;
  const lastIndex = currentPage * characterPerPage;
  const firstIndex = lastIndex - characterPerPage;

  return (
    <>
      <div className="container grid-characters">
        {allCharacters
          .map(character => <CharacterCard character={character} key={uuidv4()} />)
          .slice(firstIndex, lastIndex)}
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
