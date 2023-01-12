import React, { useContext, useState, useEffect } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { Loader } from './Loader';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination';

export const CharacterList = () => {
  const { allCharacters, loading } = useContext(CharacterContext);
  const totalCharacters = allCharacters.length;
  const [characterPerPage, setCharacterPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * characterPerPage;
  const firstIndex = lastIndex - characterPerPage;

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="card-list-character container">
            {allCharacters
              .map((character, index) => (
                <CharacterCard character={character} key={character.name} id={index + 1} />
              ))
              .slice(firstIndex, lastIndex)}
          </div>
          <Pagination
            characterPerPage={characterPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCharacters={totalCharacters}
          />
        </>
      )}
    </div>
  );
};
