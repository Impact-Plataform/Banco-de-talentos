import { getNamePlanet } from '../services/services';


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
