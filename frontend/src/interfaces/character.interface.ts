import { Dispatch, SetStateAction } from 'react';

export interface FilterProps {
  [key: string]: string | undefined;
  films: string;
  gender: string;
  species: string;
}

export interface Character {
  [key: string]: string | Array<string>;
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
  charactersToShow: Array<Character> | null;
  currentPage: number;
  addPage: () => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
  filters: FilterProps;
  changeFilters: (filters: Partial<FilterProps>) => void;
}
