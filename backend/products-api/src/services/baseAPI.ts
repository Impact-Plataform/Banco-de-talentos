import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/all",
});
