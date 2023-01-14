import React, { useContext, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { Loader } from './Loader';
import { CharacterCard } from './CharacterCard';
import { Pagination } from './Pagination';

export const CharacterList = () => {
  const { allCharacters, loading, filteredCharacters } = useContext(CharacterContext);

  // Logica das paginas
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
            {filteredCharacters.length ? (
              <>
                {filteredCharacters.map(character => (
                  <CharacterCard character={character} key={character.name} />
                ))}
              </>
            ) : (
              <>
                {allCharacters
                  .map(character => <CharacterCard character={character} key={character.name} />)
                  .slice(firstIndex, lastIndex)}
                <Pagination
                  characterPerPage={characterPerPage}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  totalCharacters={totalCharacters}
                />
              </>
            )}
          </div>
          {/* <Pagination
            characterPerPage={characterPerPage}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalCharacters={totalCharacters}
          /> */}
        </>
      )}
    </div>
  );
};
