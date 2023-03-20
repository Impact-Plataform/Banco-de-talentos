import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import Spinner from "../../components/Spinner/Spinner";
import { StateContext } from "../../context/StateProvider";
import api from "../../service/api";

const Personagens = () => {
  const {
    info,
    setInfo,
    people,
    setPeople,
    films,
    species,
    vehicles,
    planets,
    setPlanets,
    setSpecies,
    setFilms,
  } = useContext(StateContext);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/people/?page=${page}`)
      .then((response) => {
        setPeople(response.data.results);
        setInfo(response.data.results);
        setLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [page]);

  useEffect(() => {
    api
      .get(`/planets/`)
      .then((response) => {
        setPlanets(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/species/`)
      .then((response) => {
        setSpecies(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get(`/films/`)
      .then((response) => {
        setFilms(response.data.results)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <section>
      <div className="container-md h-100">
        <div className="row row-cols-1 row-cols-md-5 g-3 p-3">
          {info.length == 0 && loading == false && <Spinner />}
          {info.length == 0 && loading == true && (
            <div className="d-flex justify-content-center text-center w-100">
              <h5>Nenhum resultado encontrado!</h5>
            </div>
          )}
          {info.length > 0 &&
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
                  especie={
                    info.species == 0
                      ? "human"
                      : species
                          .filter((especie) => especie.url == info.species)
                          .sort((e1, e2) => e1.url == e2.url)
                          .map((especie) => especie.name)
                  }
                  anoDeNascimento={info.birth_year}
                  planeta={planets
                    .filter((planeta) => planeta.url == info.homeworld)
                    .sort((p1, p2) => p1.url == p2.url)
                    .map((planeta) => planeta.name)}
                  filmes={
                    
                    films.filter((films) => films.url == info.films.map((urls) => urls))
                    .map((filme) => filme.title)
                  }
                  url={info.url}
                  id={info.url.slice(-3).replace(/\//g, "")}
                />
              );
            })}
        </div>
      </div>

      {info.length > 1 && (
        <div className="container-fluid p-3 bg-tertiary h-auto">
          <Pagination
            anterior={previousPage}
            proxima={nextPage}
            page={page}
            limit={9}
          />
        </div>
      )}
    </section>
  );
};

export default Personagens;
