'use client'
import useSWR from 'swr';
import { v4 as uuidv4 } from 'uuid';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { notFound, usePathname } from 'next/navigation';
import { ICharacter, ICharacterDetails } from '../../types/Characters.types';
import { fetcherCharacterId, getNamePlanet } from '../../services/characters.services';
import { getNameFilms } from '../../services/films.services';
import { getSpecie } from '../../services/species.service';
import { urlPeople } from '../../constants';
import { createdId } from '../../utils';
import { getNamesStarships } from '../../services/starships.services';
import { getNamesVehicles } from '../../services/vehicles.services';
import { DetailsCharacterContainer, ContainerImg, DescriptionContainer, Loading } from './detailsCharacter.style';
import Starship from '../../assets/Starship';
import Vehicle from '../../assets/Vehicle';
import ship from '../../../public/starship.gif'; 


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
    if (!getCharacter.data && !getCharacter.isLoading) return notFound();
    newObjectCharacter(getCharacter.data);  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCharacter.isLoading])

  
  if (getCharacter.error) return <h1>Error</h1>
  if (isLoading) {
    return(
      <Loading>
        <Image
          src={ship}
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
              <p>Homeworld:<span>{` ${character?.homeworld}`}</span></p>
              <p>Birth Year:<span>{` ${character?.birth_year}`}</span></p>
              { (character?.species === "Sem informação")? "" : (
                <p>Specie<span>{` ${character?.species}`}</span></p>
              ) }
              <p>Gender:<span>{` ${character?.gender}`}</span></p>
              <p>Height:<span>{` ${character?.height} cm`}</span></p>
              <p>Mass:<span>{` ${character?.mass} Kg`}</span></p>
              <p>Skin Color:<span>{` ${character?.skin_color}`}</span></p>
              <p>Eye Color:<span>{` ${character?.eye_color}`}</span></p>
              <p>Hair Color:<span>{` ${character?.hair_color}`}</span></p>
            </section>
          </div>
        </DescriptionContainer>
      </div>
      <div className="starships-vehicles-films">
        <div className="starships-vehicles">
          <ul>
            <h2>Starships</h2>
            { character?.starships.map((starship: string) => (
              <span key={ uuidv4() }>
                <Starship />
                <li>{starship}</li>
              </span>
            )) }
          </ul>
          <ul>
            <h2>Vehicles</h2>
            { character?.vehicles.map((vehicle: string) => (
              <span key={ uuidv4() }>
                <Vehicle/>
                <li>{vehicle}</li>
              </span>
            )) }
          </ul>
        </div>
          <div className="containerFilms">
            <h2>Films</h2>
            <div className="containerFilmsImgs">
              { character?.films.map((film) => (
                <div className="containerImgs" key={ uuidv4() }>
                  <Image
                    src={`https://starwars-visualguide.com/assets/img/films/${film?.filmId}.jpg`}
                    alt={`Foto do personagem ${film?.title}`}
                    width={300}
                    height={400}
                  />
                  <h2>{film?.title}</h2>
                </div>
              )) }
            </div>
          </div>
        </div>
    </DetailsCharacterContainer>
  );
};
