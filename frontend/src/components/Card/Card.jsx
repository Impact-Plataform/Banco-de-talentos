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
  const idFoto = url.slice(29, -1);

  const fotoCard = `../personagens/${idFoto}.jpg`;

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <img
            style={{ height: 280 + "px" }}
            src={fotoCard}
            className="card-img-top"
            alt="personagens"
          />
          <h5 className="card-title text-center">{nome}</h5>

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
  );
};

export default Card;
