import { getNamePlanet } from '../services/services';
import { ICharacter } from '../types/Characters.types';


export const createdId = (url: string) => {
  const removeMidText = url.replace("https://swapi.dev/api/people/", "");
  let result = "";
  if (removeMidText[1] !== "/") {
    result = removeMidText.substring(0, 2)
  }
  else {
    result = removeMidText.substring(0, 1)
  }
  return result;
};


export const handleGetPlanet = async (planet: string) => {
  const planetName = await getNamePlanet(planet);
  return planetName;
};


export const handlePage = (page: number,  character: ICharacter[]) => {
  if (page === 0) {
    return character.slice(0, 10)
  }
  return character.slice((page * 10), (page * 10) + 10)
};
