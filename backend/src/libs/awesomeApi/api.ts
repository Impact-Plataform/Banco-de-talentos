import axios from "axios";
const serverUrl = "https://economia.awesomeapi.com.br";

const api = axios.create({
  baseURL: serverUrl,
});

export default api;
