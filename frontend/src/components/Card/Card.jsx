import React from "react";
import Modal from "../Modal/Modal";

const Card = ({
  nome,
  genero,
  altura,
  peso,
  corDoCabelo,
  corDosOlhos,
  pele,
  especie,
  anoDeNascimento,
  planeta,
  filmes,
  url,
  id,
}) => {
  const param = url.slice(22).replace(/.$/, "");
  const idUnico = `../${param}.jpg`;

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body p-2">
          <img
            style={{ height: 280 + "px" }}
            src={idUnico}
            className="card-img-top mp-0"
            alt="imagem do card"
          />
          <h5 className="card-title text-center" translate="no">
            {nome}
          </h5>
          <div className="container-md d-flex justify-content-center">
            {param.slice(0, 6) == "people" ? (
              <Modal
                nome={nome}
                genero={genero}
                altura={altura}
                peso={peso}
                corDoCabelo={corDoCabelo}
                corDosOlhos={corDosOlhos}
                pele={pele}
                especie={especie}
                anoDeNascimento={anoDeNascimento}
                planeta={planeta}
                filmes={filmes}
                idModal={id}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
