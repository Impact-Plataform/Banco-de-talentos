import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/people",
});

export default api;