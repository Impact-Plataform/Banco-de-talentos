import axios from 'axios';
import api from './index';
import { ICharacter } from '../types/Characters.types';


export const getPlanet = async (planet: string): Promise<string | []> => {
  try {
    const response = await axios.get(planet);
    const returnedData = await response.data;
    return returnedData.name
  } catch (error) {
    console.log(error);
    return []
  }
};


export const getCharactersPerPage = async (page: number):Promise<ICharacter[]> => {
  try {
    const response = await api.get(`people/?page=${page}`);
    const returnedData = await response.data;
    return returnedData.results
  } catch (error) {
    console.log(error);
    return []
  }
};


export const getAllCharacters = async ():Promise<ICharacter[]> => {
  const dataPromise = Array(9).fill(0).map((_t, index) => {
    const data = getCharactersPerPage(index + 1)
    return data
  });
  const dataResult = await Promise.all(dataPromise)
  return dataResult.reduce((acc, value) => ([...acc, ...value]),[])
}