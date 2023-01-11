import api from './index';


export const getNameStarship = async (url: string) => {
  const response = await api.get(url.replace("https://swapi.dev/api/", ""));
  const returnedData = await response.data;
  return returnedData.name
};


export const getNamesStarships = async (starships: string[]) => {
  if (starships.length === 0) {
    return ["Sem informação"];
  }
  const data = starships.map( async(starship) => await getNameStarship(starship));
  const data2 = await Promise.all(data);
  return data2;
};
