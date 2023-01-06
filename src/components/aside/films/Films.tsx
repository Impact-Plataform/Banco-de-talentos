'use client'
import useSWR from 'swr';
import { FilmContainer } from './film.style';
import api from '../../../services';
import { IFilm } from '../../../types/Films.type';

export default function Films() {

  const fetcher = (url: string) => api.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR("films/", fetcher);


  if (error) return <div>falhou ao carregar</div>
  if (isLoading) return <div>carregando...</div>

  return(
    <FilmContainer>
      <h3>Filmes</h3>
      { data.results.map((film: IFilm) => (
        <p
          key={film.episode_id}
          id={film.url}
        >
          { film.title }
        </p>
      )) }
    </FilmContainer>
  );
};
