import { useEffect, useState } from 'react';
import { CharactersContainer } from './characters.style';
import CharacterCard from './CharacterCard';
import { getCharacters, getPlanet } from '../../services/services';
import { ICharacter } from '../../types/Characters.types';


const createdId = (url: string) => {
  const removeMidText = url.replace('https://swapi.dev/api/people/', '');
  let result = '';
  if (removeMidText[1] !== "/") {
    result = removeMidText.substring(0, 2)
  }
  else {
    result = removeMidText.substring(0, 1)
  }
  return result;
};

const handleGetPlanet = async (planet: string) => {
  const planetName = await getPlanet(planet) as Promise<string>;
  return planetName;
};



const handleData = async () => {
  const data = await getCharacters();
  const dataMap = data.map( async (c: ICharacter) => {
    const namePlanet = await handleGetPlanet(c.homeworld);
    const convertNumber = Number(createdId(c.url))
      return {
        id: convertNumber,
        name: c.name, 
        height: c.height, 
        mass: c.mass, 
        hair_color: c.hair_color, 
        skin_color: c.skin_color, 
        eye_color: c.eye_color, 
        birth_year: c.birth_year, 
        gender: c.gender, 
        homeworld: namePlanet,
        films: c.films, 
        species: c.species, 
        vehicles: c.vehicles, 
        starships: c.starships, 
        url: c.url
    }
  })
  const dataMapPromise = Promise.all(dataMap);
  return dataMapPromise;
}


export default async function Characters() {
  const allCharacter: ICharacter[] = await handleData();


  return(
    <CharactersContainer>
      { allCharacter?.map((character) => (
        <CharacterCard
          key={character.id}
          img={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
          name={character.name}
          height={character.height}
          homeworld={ character.homeworld }
        />
      )) }
    </CharactersContainer>
  );
}
