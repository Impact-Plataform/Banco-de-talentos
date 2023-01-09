import { getNamePlanet } from '../services/characters.services';
import { ICharacter } from '../types/Characters.types';


export const handleCharactersFilter = (
  listCharacters: ICharacter[],
  gender: string | undefined,
  speciesFilter: string | undefined,
  filmFilter: string | undefined,
  charactersSearch: string | undefined
  ) => {

    if (gender) {
      return listCharacters.filter((character) => character.gender === gender);
    }
  
    if (speciesFilter) {
      const data = listCharacters.filter((character) => {
        if (character.species.length > 0) {
          return createdIdSpecies(character.species[0]) === speciesFilter
        }
      });
      return data
    }

    if (filmFilter) {
      const data = listCharacters.filter((character) => {
        return character.films.find((film) => film === filmFilter)
      })
      return data
    }

    if (charactersSearch) {
      return listCharacters.filter((character) =>  new RegExp(charactersSearch, 'i').test(character.name.toLowerCase()))
    }

    return listCharacters;
}


export const createdId = (baseUrl: string, url: string) => {
  const removeMidText = url.replace(baseUrl, "");
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


export const handlePage = (
  page: number,
  character: ICharacter[],
  gender: string | undefined,
  speciesFilter: string | undefined,
  filmFilter: string | undefined,
  charactersSearch: string | undefined
  ) => {
    const arrayFilter = handleCharactersFilter(character, gender, speciesFilter, filmFilter, charactersSearch)
    if (page === 0) {
      return arrayFilter.slice(0, 10)
    }
    return arrayFilter.slice((page * 10), (page * 10) + 10)
};


export const createdIdSpecies = (url: string) => {
  const removeMidText = url.replace("https://swapi.dev/api/species/", "");
  let result = "";
  if (removeMidText[1] !== "/") {
    result = removeMidText.substring(0, 2)
  }
  else {
    result = removeMidText.substring(0, 1)
  }
  return result;
};
