'use client'
import useSWR from 'swr';
import { FilmContainer } from './film.style';
import api from '../../../services';
import { IFilm } from '../../../types/Films.type';
import { useContext } from 'react';
import { AppContext } from '../../../contexts/contextProvider';


export default function Films() {
  const { setFilmFilter, setMenuIsVisible } = useContext(AppContext);


  const fetcher = (url: string) => api.get(url).then(res => res.data)
  const { data, error, isLoading } = useSWR("films/", fetcher);


  const handleSetFilmFilter = (target: any) => {
    setFilmFilter({ id: target.id, name: target.innerText })
    setMenuIsVisible(false)
  };


  if (error) return <div>falhou ao carregar</div>
  if (isLoading) return <div>carregando...</div>
  return(
    <FilmContainer>
      <h3>Filmes</h3>
      { data.results.map((film: IFilm) => (
        <p
          key={film.episode_id}
          id={film.url}
          onClick={ (e) => handleSetFilmFilter(e.target) }
        >
          { film.title }
        </p>
      )) }
    </FilmContainer>
  );
};
