import React, { useEffect, useState } from "react";
import api from "../../service/api";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import style from "./Section.module.css";
import img from "../../assets/images/personagens/19.jpg";

const Section = () => {
  const [page, setPage] = useState(1);
  const [array, setArray] = useState([]);
  console.log(array, "personagens");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    api
      .get(`/people/?page=${page}`)
      .then((response) => {
        setArray(response.data.results);
      }, setLoading(false))
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
    <section className={style.section}>
      <div className="container-md">
        <div className="row row-cols-1 row-cols-md-5 g-3 p-3">
          {array ? (
            array.map((personagem, index) => {
              return (
                <Card
                  key={index}
                  id={personagem.id}
                  imageId={img}
                  nome={personagem.name}
                  genero={personagem.gender}
                  altura={personagem.height}
                  peso={personagem.mass}
                  corDoCabelo={personagem.hair_color}
                  corDosOlhos={personagem.eye_color}
                  corDaPele={personagem.skin_color}
                  especie={personagem.species}
                  anoDeNascimento={personagem.birth_year}
                  planeta={personagem.homeworld}
                  filmes={personagem.films}
                />
              );
            })
          ) : (
            <Spinner/>
          )}
        </div>
      </div>
      <div className="container-fluid p-2">
        <Pagination anterior={previousPage} proxima={nextPage} />
      </div>
    </section>
    
  );
};

export default Section;
