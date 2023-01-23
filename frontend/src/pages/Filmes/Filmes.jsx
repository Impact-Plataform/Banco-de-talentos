import React, { useContext, useEffect } from 'react'
import Card from '../../components/Card/Card';
import Pagination from '../../components/Pagination/Pagination';
import { StateContext } from '../../context/StateProvider';
import api from '../../service/api';

const Filmes = () => {
  const { info, setInfo, films, setFilms} = useContext(StateContext);

  useEffect(() => {
    api
      .get(`/films/`)
      .then((response) => {
        setInfo(response.data.results);
        setFilms(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);


  return (
    <section>
      <div className="container-md h-100">
        <div className="row row-cols-1 row-cols-md-5 g-3 p-3">
          {info == "" ? (
            <div className="d-flex justify-content-center align-items-center text-center w-100 p-5">
              <h5>Nenhum resultado encontrado!</h5>
            </div>
          ) : (
            info.map((info) => {
              return (
                <Card
                key={info.url}
                nome={info.name || info.title}
                genero={info.gender}
                altura={
                  info.height == "unknown"
                    ? "unavailable"
                    : info.height + " cm"
                }
                peso={
                  info.mass == "unknown" ? "unavailable" : info.mass + " kg"
                }
                corDoCabelo={info.hair_color}
                corDosOlhos={info.eye_color}
                pele={info.skin_color}
                especie={info.species == "" ? "human" : info.species}
                anoDeNascimento={info.birth_year}
                planeta={info.homeworld}
                filmes={info.films}
                url={info.url}
                id={info.url.slice(-3).replace(/\//g, "")}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}

export default Filmes