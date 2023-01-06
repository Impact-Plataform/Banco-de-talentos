import { createContext, ReactNode, useEffect, useState } from 'react';

import { getAllFilms } from '../api/SWAPI';
import { Film, FilmsContextData } from '../interfaces/films.interface';

interface FilmsProps {
  children: ReactNode;
}

export const FilmsContext = createContext<FilmsContextData | null>(null);

export function FilmsProvider({ children }: FilmsProps) {
  const [films, setFilms] = useState<Array<Film> | null>(null);

  useEffect(() => {
    getAllFilms().then((response) => setFilms(response));
  }, []);

  return <FilmsContext.Provider value={{ films }}>{children}</FilmsContext.Provider>;
}
