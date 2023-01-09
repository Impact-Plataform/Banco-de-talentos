'use client'
import { v4 as uuidv4 } from 'uuid';
import { useContext, useEffect, useState } from 'react';
import { SpeciesContainer } from './species.style';
import { getAllSpecies } from '../../../services/aside.service';
import { AppContext } from '../../../contexts/contextProvider';
import { ISpecie } from '../../../types/Species.types';
import { storeAllSpecies } from '../../../store/store';
import { createdIdSpecies } from '../../../utils';
import ModalContainer from './Modal';


export default function Species() {
  const { handleSpecies, isLoadingSpecies, setIsLoadingSpecies } = useContext(AppContext);
  const [species, setSpecies] = useState<ISpecie[]>([]);
  

  useEffect(() => {
    storeAllSpecies(getAllSpecies, setSpecies, setIsLoadingSpecies)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingSpecies])

  return(
    <SpeciesContainer>
      <h3>Espécies</h3>
      <ul>
        { species.slice(0, 10).map((specie) => (
          <li
            key={ uuidv4() }
            value={createdIdSpecies(specie.url)}
            onClick={(e) => handleSpecies(e.target)}
            >
              {specie.name}
          </li>
        )) }
      </ul>
      <ModalContainer species={species} />
    </SpeciesContainer>
  );
};
