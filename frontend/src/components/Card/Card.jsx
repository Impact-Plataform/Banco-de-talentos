import React from "react";
import Modal from "../Modal/Modal";

const Card = ({
  nome,
  genero,
  altura,
  peso,
  corDoCabelo,
  corDosOlhos,
  CorDaPele,
  especie,
  anoDeNascimento,
  planeta,
  filmes,
  url,
}) => {
  const idPerson = url.slice(29, -1);
  const imgPerson = `../personagens/${idPerson}.jpg`;

  const idFilme = url.slice(28, -1);
  const imgFilm = `../filmes/${idFilme}.jpg`;

  const idEspecies = url.slice(30, -1);
  const imgEspecies = `../especies/${idEspecies}.jpg`;

  const idVeiculo = url.slice(31, -1);
  const imgVeiculo = `../veiculos/${idVeiculo}.jpg`;

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body p-2">
          <img
            style={{ height: 280 + "px" }}
            src={imgPerson || imgFilm || imgEspecies || imgVeiculo}
            className="card-img-top mp-0"
            alt="imagem do card"
          />
          <h5 className="card-title text-center">{nome}</h5>
          <div className="container-md d-flex justify-content-center">
            <Modal
              nome={nome}
              genero={genero}
              altura={altura}
              peso={peso}
              corDoCabelo={corDoCabelo}
              corDosOlhos={corDosOlhos}
              CorDaPele={CorDaPele}
              especie={especie}
              anoDeNascimento={anoDeNascimento}
              planeta={planeta}
              filmes={filmes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
