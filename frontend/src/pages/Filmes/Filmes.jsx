import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Spinner from "../../components/Spinner/Spinner";
import { StateContext } from "../../context/StateProvider";
import api from "../../service/api";

const Filmes = () => {
  const { info, setInfo, films, setFilms } = useContext(StateContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    api
      .get(`/films/`)
      .then((response) => {
        setInfo(response.data.results);
        setFilms(response.data.results);
        setLoading(true);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

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
                    info.species == !info.species ? "human" : info.species
                  }
                  anoDeNascimento={info.birth_year}
                  planeta={info.homeworld}
                  filmes={info.films}
                  url={info.url}
                  id={info.url.slice(-3).replace(/\//g, "")}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Filmes;
