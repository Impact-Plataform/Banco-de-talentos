import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { getByPath } from '../api/SWAPI';
import {
  Character,
  CharactersContextData,
  FilterProps,
} from '../interfaces/character.interface';

interface CharactersProps {
  children: ReactNode;
}

export const CharactersContext = createContext<CharactersContextData | null>(null);

export function CharactersProvider({ children }: CharactersProps) {
  const [characters, setCharacters] = useState<Array<Character> | null>(null);
  const [charactersToShow, setCharactersToShow] = useState<Array<Character> | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [search, setSearch] = useState<string>('');
  const [filters, setFilters] = useState<FilterProps>({
    films: '',
    gender: '',
    species: '',
  });

  const addPage = () => setCurrentPage((prev) => prev + 1);

  const changeFilters = (filterToChange: Partial<FilterProps>) =>
    setFilters((prev) => ({ ...prev, ...filterToChange }));

  useEffect(() => {
    getByPath('people', { page: search ? 1 : currentPage, search }).then(
      ({ ok, results: res }) => {
        if (ok && search) setCharacters(res);
        else if (ok) setCharacters((prev) => (prev ? [...prev, ...res] : res));
      },
    );
  }, [currentPage, search]);

  useEffect(() => {
    setCharactersToShow(characters);
    Object.entries(filters).forEach(
      ([filter, value]) =>
        value &&
        setCharactersToShow(
          (prev) =>
            prev?.filter((character) =>
              filter === 'gender'
                ? character.gender === value
                : character[filter].includes(value),
            ) || [],
        ),
    );
    if ((charactersToShow as [])?.length < 3) addPage();
  }, [filters, characters]);

  return (
    <CharactersContext.Provider
      value={{
        characters,
        charactersToShow,
        currentPage,
        addPage,
        search,
        setSearch,
        filters,
        changeFilters,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

export const useCharacters = () => useContext(CharactersContext) as CharactersContextData;
