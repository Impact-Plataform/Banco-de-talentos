import api from './index';


export const getNameVehicle = async (url: string) => {
  const response = await api.get(url.replace("https://swapi.dev/api/", ""));
  const returnedData = await response.data;
  return returnedData.name;
};


export const getNamesVehicles = async (vehicles: string[]) => {
  if (vehicles.length === 0) {
    return ["Sem informação"];
  }
  const data = vehicles.map( async(vehicle) => await getNameVehicle(vehicle));
  const data2 = await Promise.all(data);
  return data2;
};
