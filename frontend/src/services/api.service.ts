import axios from "axios";
import Person from "../model/person.model";
export const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

class ApiService {
  async getWithLoop(path: string) {
    let arr: never[] = [];
    let response: any = await api.get(path);

    arr = arr.concat(response.data.results);
    while (response.data.next) {
      const apiN = axios.create({
        baseURL: response.data.next,
      });
      response = await apiN.get("");
      arr = arr.concat(response.data.results);
    }
    return arr;
  }
  async getAllPersons(): Promise<Person[]> {
    let peoples: any = await this.getWithLoop("/people");
    return peoples;
  }
  async getAllPlanets() {
    let planets: any = await this.getWithLoop("/planets");
    return planets;
  }
  async getAllVehicles() {
    let vehicles: any = await this.getWithLoop("/vehicles");
    return vehicles;
  }
  async getAllSpecies() {
    let species: any = await this.getWithLoop("/species");
    return species;
  }
  async getAllStarships() {
    let starships: any = await this.getWithLoop("/starships");
    return starships;
  }
  async getAllFilms() {
    let films: any = await this.getWithLoop("/films");
    return films;
  }
  async getOne(url: string) {
    const api = axios.create({
      baseURL: url,
    });
    const { data } = await api.get("");
    return data;
  }
}

export default new ApiService();
