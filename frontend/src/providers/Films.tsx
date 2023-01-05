import { createContext, ReactNode, useEffect, useState } from 'react';

import { getAllFilms } from '../api/SWAPI';

interface FilmsProps {
  children: ReactNode;
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: string;
  edited: string;
  url: string;
}

export interface FilmsContextData {
  films: Array<Film> | null;
}

export const FilmsContext = createContext<FilmsContextData | null>(null);

export function FilmsProvider({ children }: FilmsProps) {
  const [films, setFilms] = useState<Array<Film> | null>(null);

  useEffect(() => {
    getAllFilms().then((response) => setFilms(response));
  }, []);

  return <FilmsContext.Provider value={{ films }}>{children}</FilmsContext.Provider>;
}
