import React, { useEffect, useState } from "react";
import api from "../../service/api";
import Card from "../Card/Card";
import style from "./Section.module.css";

const Section = () => {
  const [dados, setDados] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    api
      .get(`/?page=${page}`)
      .then((response) => setDados([response.data]))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [page]);
  console.log(dados, "resultados")
  
  
  const nextPage = () => {
    setPage(page + 1);
  }

  const previousPage = () => {
    setPage(page - 1);
  }

  return (
    <section className={style.section}>
      {dados ? dados.map((item, index) => {
        return(
          <Card
                key={index}
                nome={item.name}
                altura={item.height}
                peso={item.mass}
                corDoCabelo={item.hair_color}
                roupa={item.skin_color}
                corDosOlhos={item.eye_color}
                genero={item.gender}
              />
        )
      }) : "Loading..."}
    </section>
  );
};

export default Section;
