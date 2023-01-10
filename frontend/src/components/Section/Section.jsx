import React, { useEffect, useState } from "react";
import api from "../../service/api";
import Card from "../Card/Card";
import Pagination from "../Pagination/Pagination";
import Spinner from "../Spinner/Spinner";
import style from "./Section.module.css";

const Section = () => {
  const [dados, setDados] = useState([]);
  const [page, setPage] = useState(1);
  

  const [dados2, setDados2] = useState([]);

  useEffect(() => {
    api
      .get(`/people/?page=${page}`)
      .then((response) => { setDados([response.data]), setDados2(response.data.results)})
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [page]);
  console.log(dados, "resultados");

  



  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <section className={style.section}>
      <div className="container-md">
      <div className="row row-cols-1 row-cols-md-5 g-3 p-5">
      {dados2 ? (
        dados2.map((item, index) => {
          return (
            <Card
              key={index}
              nome={item.name}
              genero={item.gender}
              altura={item.height}
              peso={item.mass}
              corDoCabelo={item.hair_color}
              corDosOlhos={item.eye_color}
              roupa={item.skin_color}
            />
          );
        })
      ) : (
        <Spinner />
      )}
      </div>
      </div>
      <div class="container-fluid p-2">
      <Pagination onClick={nextPage} />
      </div>
      
    </section>
  );
};

export default Section;
