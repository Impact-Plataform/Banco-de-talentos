import React, { useContext, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { StateContext } from "../../context/StateProvider";
import api from "../../service/api";

const Especies = () => {
  const { info, setInfo, species, setSpecies } = useContext(StateContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`/species/?page=${page}`)
      .then((response) => {
        setSpecies(response.data.results);
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [page]);

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
          {info == "" ? (
            <div className="d-flex justify-content-center text-center w-100">
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

      <div className="container-fluid p-3 bg-tertiary h-auto">
        <Pagination
          anterior={previousPage}
          proxima={nextPage}
          page={page}
          limit={4}
        />
      </div>
    </section>
  );
};

export default Especies;
