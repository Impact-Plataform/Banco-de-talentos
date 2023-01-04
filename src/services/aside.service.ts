import api from './index';
import { ISpecie } from '../types/Species.types';


export const getSpeciesPerPage = async (page: number) => {
  const response = await api.get(`species/?page=${page}`);
  const responseData = await response.data;
  return responseData.results;
};


export const getAllSpecies = async (): Promise<ISpecie[]> => {
  const dataPromise = Array(4).fill(0).map( async (_t, index) => {
    const data = await getSpeciesPerPage(index + 1)
    return data
  });
  
  const dataResult = await Promise.all(dataPromise);
  return dataResult.reduce((acc, value) => ([...acc, ...value]),[])
}