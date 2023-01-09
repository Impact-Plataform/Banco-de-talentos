import api from './index';
import { ICharacter } from '../types/Characters.types';
import { createdId, handleGetPlanet } from '../utils';


const urlPeople = "https://swapi.dev/api/people/";


export const getNamePlanet = async (planet: string): Promise<string | []> => {
  const response = await api.get(planet.replace("https://swapi.dev/api/", ""));
  const returnedData = await response.data;
  return returnedData
};


export const getCharactersPerPage = async (page: number):Promise<ICharacter[]> => {
    const response = await api.get(`people/?page=${page}`);
    const responseData = await response.data;
    const responseResult = responseData.results.map( async (character: ICharacter) => {
      return {
        ...character,
        id: createdId(urlPeople, character.url),
      }
    });
    const responsePromiseAll = await Promise.all(responseResult)
    return responsePromiseAll
};


export const getAllCharacters = async ():Promise<ICharacter[]> => {
    const dataPromise = Array(9).fill(0).map((_t, index) => {
      const data = getCharactersPerPage(index + 1)
      return data
    });
    const dataResult = await Promise.all(dataPromise)
    return dataResult.reduce((acc, value) => ([...acc, ...value]),[])
}