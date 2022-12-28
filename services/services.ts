import api from './index';


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
