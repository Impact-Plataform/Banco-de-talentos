import { createContext, ReactNode, useEffect, useState } from 'react';

import { getAllPeople } from '../api/SWAPI';

interface CharactersProps {
  children: ReactNode;
}

export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface CharactersContextData {
  characters: Array<Character> | null;
}

export const CharactersContext = createContext<CharactersContextData | null>(null);

export function CharactersProvider({ children }: CharactersProps) {
  const [characters, setCharacters] = useState<Array<Character> | null>(null);

  useEffect(() => {
    getAllPeople().then((response) => setCharacters(response.results));
  }, []);

  return (
    <CharactersContext.Provider value={{ characters }}>
      {children}
    </CharactersContext.Provider>
  );
}
