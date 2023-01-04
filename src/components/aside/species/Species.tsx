'use client'
import { SpeciesContainer } from './species.style';
import { getAllSpecies } from '../../../services/aside.service';
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../../contexts/contextProvider';
import { ISpecie } from '../../../types/Species.types';
import { storeAllSpecies } from '../../../store/store';


export default function Species() {
  const { isLoading } = useContext(AppContext);
  const [species, setSpecies] = useState<ISpecie[]>([]);


  useEffect(() => {
    storeAllSpecies(getAllSpecies, setSpecies)
  }, [isLoading])

  return(
    <SpeciesContainer>

    </SpeciesContainer>
  );
};
