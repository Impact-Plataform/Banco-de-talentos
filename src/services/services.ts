import axios from 'axios';
import api from './index';


export const getPlanet = async (planet: string) => {
  try {
    const response = await axios.get(planet);
    const returnedData = await response.data;
    return returnedData.name
  } catch (error) {
    console.log(error);
    return []
  }
};


export const getCharacters = async () => {
  try {
    const response = await api.get(`people/?page=1`);
    const returnedData = await response.data;

    return returnedData.results
  } catch (error) {
    console.log(error);
    return []
  }
};
