import axios from 'axios';

export function getAllPeople(page = 1, search = '') {
  const result = axios
    .get('https://swapi.dev/api/people/', { params: { page, search } })
    .then((res) => res.data.results)
    .catch((err) => err.detail);
  return result;
}

export function getAllFilms() {
  const result = axios
    .get('https://swapi.dev/api/films/')
    .then((res) => res.data.results)
    .catch((err) => err.detail);
  return result;
}
