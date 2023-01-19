import React, { useContext, useEffect, useState } from "react";
import { StateContext } from "../../context/StateProvider";
import api from "../../service/api";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Section.module.css";

const Section = () => {
  const { info, setInfo } = useContext(StateContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`/people/?page=${page}`)
      .then((response) => {
        setInfo(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
    if (page == 9) {
      return setPage(1);
    }
  };

  const previousPage = () => {
    setPage(page - 1);
    if (page == 1) {
      return setPage(1);
    }
  };

  return (
    <section className={style.section}>
      
        <div className="container-md">
          <div className="row row-cols-1 row-cols-md-5 g-3 p-3">
            {info.map((info) => {
              return (
                <Card
                  key={info.url}
                  nome={info.name || info.title}
                  genero={info.gender}
                  altura={info.height}
                  peso={info.mass == "unknown" ? "indisponível" : info.mass}
                  corDoCabelo={
                    info.hair_color == "n/a" ? "Não possui" : info.hair_color
                  }
                  corDosOlhos={info.eye_color}
                  corDaPele={
                    info.skin_color
                  }
                  especie={info.species}
                  anoDeNascimento={
                    info.birth_year == "unknown"
                      ? "indisponível"
                      : info.birth_year
                  }
                  planeta={info.homeworld}
                  filmes={info.films}
                  url={info.url || info.url}
                />
              );
            })}
          </div>
        </div>
      
      <div className="container-fluid p-2">
        <Pagination anterior={previousPage} proxima={nextPage} />
      </div>
    </section>
  );
};

export default Section;
