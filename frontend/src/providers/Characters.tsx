import { createContext, ReactNode, useEffect, useState } from 'react';

import { getAllPeople } from '../api/SWAPI';
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
    getAllPeople(currentPage || 1).then((response) => {
      if (typeof response == 'object') {
        setCharacters((prev) => (prev ? [...prev, ...response] : response));
      }
    });
  }, [currentPage]);

  return (
    <CharactersContext.Provider
      value={{ characters, currentPage, addPage, search, setSearch }}
    >
      {children}
    </CharactersContext.Provider>
  );
}
