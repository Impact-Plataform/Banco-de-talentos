import axios from "axios";

const api = axios.create({
  baseURL: `https://swapi.dev/api/`,
});

export const GetPeople = async (page) => {
  try {
    const requisicao = await api.get(`people/?page=${page}`)
    return requisicao.data
  } catch (e) {
    console.log(e)
  }
}

export const GetFilms = async () => {
  try {
    const requisicao = await api.get(`films/`)
    return requisicao.data
  } catch (e) {
    console.log(e)
  }
}

export const GetSpecies = async () => {
  try {
    const requisicao = await api.get(`species/`)
    return requisicao.data
  } catch (e) {
    console.log(e)
  }
}