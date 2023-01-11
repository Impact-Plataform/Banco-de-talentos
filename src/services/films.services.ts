import api from './index';
import { IFilm } from '../types/Films.type';
import { createdId } from '../utils';
import { urlFilm } from '../constants';

export const getNameFilm = async (film: string) => {
  const response = await api.get(film.replace("https://swapi.dev/api/", ""));
  const returnedData = await response.data;
  return returnedData
};


export const getNameFilms = async (films: string[]) => {
  if (films.length === 0) {
    return [{
      title: "Sem informação",
      filmId: "0"
    }]
  }
  const data = films.map( async(film) => {
    const objectFilm: IFilm = await getNameFilm(film);
    return {
      title: objectFilm.title,
      filmId: createdId(urlFilm, objectFilm.url)
    }
  });
  const data2 = await Promise.all(data);
  return data2;
};
