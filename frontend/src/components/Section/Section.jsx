import React, { useEffect, useState } from "react";
import api from "../../service/api";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import style from "./Section.module.css";
import img from "../../assets/images/personagens/19.jpg";

const Section = () => {
  const [page, setPage] = useState(1);
  const [array, setArray] = useState([]);
  
  useEffect(() => {
      api
      .get(`/people/?page=${page}`)
      .then((response) => {
        setArray(response.data.results);
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [page]);

  const nextPage = () => {
    setPage(page + 1);
    if(page == 9){
      return setPage(1);
    }
  };

  const previousPage = () => {
    setPage(page - 1);
    if(page == 1) {
      return setPage(1);
    }
  };

  return (
    <section className={style.section}>
      <div className="container-md">
        <div className="row row-cols-1 row-cols-md-5 g-3 p-3">
            {array.map((personagem) => {
              return (
                <Card
                  key={personagem.url}
                  imageId={img}
                  nome={personagem.name}
                  genero={personagem.gender == "n/a" ? "indisponível" : personagem.gender} 
                  altura={personagem.height}
                  peso={personagem.mass == "unknown" ? "indisponível" : personagem.mass}
                  corDoCabelo={personagem.hair_color == "n/a" ? "Não possui" : personagem.hair_color}
                  corDosOlhos={personagem.eye_color}
                  corDaPele={personagem.skin_color == "unknown" ? "indisponível" : personagem.skin_color}
                  especie={personagem.species}
                  anoDeNascimento={personagem.birth_year == "unknown" ? "indisponível" : personagem.birth_year}
                  planeta={personagem.homeworld}
                  filmes={personagem.films}
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
