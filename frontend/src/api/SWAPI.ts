import axios from 'axios';

interface paramsPros {
  page?: number;
  search?: string;
}

export function getByPath(path: string, params: paramsPros = {}) {
  return axios
    .get(`https://swapi.dev/api/${path}/`, { params: { ...params } })
    .then((res) => ({ ...res.data, ok: true }))
    .catch((err) => ({ error: err.detail, ok: false }));
}
