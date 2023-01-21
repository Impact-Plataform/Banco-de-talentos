import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { getByPath } from '../api/SWAPI';
import { Specie, SpeciesContextData } from '../interfaces/specie.interface';

export const SpeciesContext = createContext<SpeciesContextData | null>(null);

interface SpeciesProps {
  children: ReactNode;
}

export function SpeciesProvider({ children }: SpeciesProps) {
  const [species, setSpecies] = useState<Array<Specie> | null>(null);

  useEffect(() => {
    getByPath('species').then(({ ok, results: res }) => ok && setSpecies(res));
  }, []);

  return (
    <SpeciesContext.Provider value={{ species }}>{children}</SpeciesContext.Provider>
  );
}

export const useSpecies = () => useContext(SpeciesContext) as SpeciesContextData;
