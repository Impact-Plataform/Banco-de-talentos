'use client'
import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ICharacter, ICharacterDetails } from '../../types/Characters.types';
import { fetcherCharacterId, getNamePlanet } from '../../services/characters.services';
import { getNameFilms } from '../../services/films.services';
import { getSpecie } from '../../services/species.service';
import { urlPeople } from '../../constants';
import { createdId } from '../../utils';
import { getNamesStarships } from '../../services/starships.services';
import { getNamesVehicles } from '../../services/vehicles.services';


export default function DetailsCharacter() {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState<ICharacterDetails>();
  const router = usePathname();
  const id = router?.replace("/character/", "");
  const getCharacter = useSWR(`people/${id}`, fetcherCharacterId);

  
  const newObjectCharacter = async (data: ICharacter) => {
    if (data) {
      const newObject = {
        ...data,
        id: createdId(urlPeople, data.url),
        homeworld: await getNamePlanet(data.homeworld),
        films: await getNameFilms(data.films),
        species: await getSpecie(data.species),
        starships: await getNamesStarships(data.starships),
        vehicles: await getNamesVehicles(data.vehicles)
      }
      setCharacter(newObject);
      setIsLoading(false);
    }
  };


  useEffect(() => {
    newObjectCharacter(getCharacter.data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCharacter.isLoading])

  
  if (getCharacter.error) return <h1>Error</h1>
  if (isLoading) return <h1>Carregando...</h1>;
  return(
    <p>Willian</p>
  );
};
