import { Dispatch, SetStateAction } from 'react';

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
  currentPage: number;
  addPage: () => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}
