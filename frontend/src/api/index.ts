import axios from "axios";

export const api = axios.create({
  baseURL: "https://swapi.dev/api/",
});
