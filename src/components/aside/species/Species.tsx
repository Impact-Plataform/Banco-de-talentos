'use client'
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useState } from 'react';
import { SpeciesContainer } from './species.style';
import { getAllSpecies } from '../../../services/aside.service';
import { AppContext } from '../../../contexts/contextProvider';
import { ISpecie } from '../../../types/Species.types';
import { storeAllSpecies } from '../../../store/store';


export default function Species() {
  const { isLoading } = useContext(AppContext);
  const [species, setSpecies] = useState<ISpecie[]>([]);
  const [limit, setLimit] = useState(10)

  useEffect(() => {
    storeAllSpecies(getAllSpecies, setSpecies)
  }, [isLoading])

  return(
    <SpeciesContainer>
      <h3>Espécies</h3>
      <ul>
        { species.slice(0, limit).map((specie) => (
          <li key={ uuidv4() }>{specie.name}</li>
        )) }
      </ul>
      <p>Mostrar mais</p>
    </SpeciesContainer>
  );
};
