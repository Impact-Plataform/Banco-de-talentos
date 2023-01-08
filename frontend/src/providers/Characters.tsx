import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { getByPath } from '../api/SWAPI';
import { Character, CharactersContextData } from '../interfaces/character.interface';

interface CharactersProps {
  children: ReactNode;
}

export const CharactersContext = createContext<CharactersContextData | null>(null);

export function CharactersProvider({ children }: CharactersProps) {
  const [characters, setCharacters] = useState<Array<Character> | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [search, setSearch] = useState<string>('');

  const addPage = () => setCurrentPage((prev) => prev + 1);

  useEffect(() => {
    getByPath('people', { page: search ? 1 : currentPage, search }).then(
      ({ ok, results: res }) => {
        if (ok && search) setCharacters(res);
        else if (ok) setCharacters((prev) => (prev ? [...prev, ...res] : res));
      },
    );
  }, [currentPage, search]);

  return (
    <CharactersContext.Provider
      value={{ characters, currentPage, addPage, search, setSearch }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

export const useCharacters = () => useContext(CharactersContext) as CharactersContextData;
