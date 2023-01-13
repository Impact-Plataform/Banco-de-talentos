'use client'
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ICharacter, ICharacterDetails } from '../../types/Characters.types';
import { fetcherCharacterId, getNamePlanet } from '../../services/characters.services';
import { getNameFilms } from '../../services/films.services';
import { getSpecie } from '../../services/species.service';
import { urlPeople } from '../../constants';
import { createdId } from '../../utils';
import { getNamesStarships } from '../../services/starships.services';
import { getNamesVehicles } from '../../services/vehicles.services';
import { DetailsCharacterContainer, ContainerImg, DescriptionContainer, Loading } from './detailsCharacter.style';


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
  if (isLoading) {
    return(
      <Loading>
        <Image
          src= "https://i.giphy.com/media/0mby9MpRJJlP0WoBT3/giphy.webp"
          alt="nave star wars" width={500} height={700}
        />
        <h1>Loading...</h1>
      </Loading>
    );
  } 
  return(
    <DetailsCharacterContainer>
      <div className="img-description">
        <ContainerImg>
          <Image
            src={`https://starwars-visualguide.com/assets/img/characters/${character?.id}.jpg`}
            alt={`Foto do personagem ${character?.name}`} width={300} height={500}
          />
        </ContainerImg>
        <DescriptionContainer>
          <div>
            <h1>{ character?.name }</h1>
            <section>
              <p>Planeta natal:<span>{` ${character?.homeworld}`}</span></p>
              <p>Ano de nascimento:<span>{` ${character?.birth_year}`}</span></p>
              { (character?.species === "Sem informação")? "" : (
                <p>Espécie<span>{` ${character?.species}`}</span></p>
              ) }
              <p>Gênero:<span>{` ${character?.gender}`}</span></p>
              <p>Altura:<span>{` ${character?.height} cm`}</span></p>
              <p>Massa:<span>{` ${character?.mass} Kg`}</span></p>
              <p>Cor da pele:<span>{` ${character?.skin_color}`}</span></p>
              <p>Cor dos olhos:<span>{` ${character?.eye_color}`}</span></p>
              <p>Cor do cabelo:<span>{` ${character?.hair_color}`}</span></p>
            </section>
          </div>
        </DescriptionContainer>
      </div>
      <div>
          <div>
            <ul>
              <h2>Naves</h2>
              { character?.starships.map((starship: string) => (
                <li key={ uuidv4() }>{starship}</li>
              )) }
            </ul>
            <ul>
              <h2>Veículos</h2>
              { character?.vehicles.map((vehicle: string) => (
                <li key={ uuidv4() }>{vehicle}</li>
              )) }
            </ul>
          </div>
          <div>
            <h2>Filmes</h2>
            { character?.films.map((film) => (
              <div key={ uuidv4() }>
                <Image
                  src={`https://starwars-visualguide.com/assets/img/films/${film?.filmId}.jpg`}
                  alt={`Foto do personagem ${film?.title}`} width={200} height={300}
                />
                <p>{film?.title}</p>
              </div>
            )) }
          </div>
        </div>
    </DetailsCharacterContainer>
  );
};
