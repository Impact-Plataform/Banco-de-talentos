import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { getByPath } from '../api/SWAPI';
import { Film, FilmsContextData } from '../interfaces/films.interface';

interface FilmsProps {
  children: ReactNode;
}

export const FilmsContext = createContext<FilmsContextData | null>(null);

export function FilmsProvider({ children }: FilmsProps) {
  const [films, setFilms] = useState<Array<Film> | null>(null);

  useEffect(() => {
    getByPath('films').then(({ ok, results: res }) => ok && setFilms(res));
  }, []);

  return <FilmsContext.Provider value={{ films }}>{children}</FilmsContext.Provider>;
}

export const useFilms = () => useContext(FilmsContext) as FilmsContextData;
