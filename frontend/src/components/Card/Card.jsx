import React from "react";

const Card = ({
  nome,
  altura,
  peso,
  corDoCabelo,
  roupa,
  corDosOlhos,
  especie,
  genero,
  filmes
}) => {
  return (
    <div className="row w-100">
  <div className="col-sm-4 mb-3 mb-sm-0 p-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{nome}</h5>
        <p className="card-text">{genero}</p>
        <p className="card-text">{altura}</p>
        <p className="card-text">{peso}</p>
        <p className="card-text">{corDoCabelo}</p>
        <p className="card-text">{corDosOlhos}</p>
        <p className="card-text">{roupa}</p>
        <p className="card-text">{especie}</p>
        <p className="card-text">{filmes}</p>
        <a href="#" className="btn btn-primary">Ver mais</a>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Card;
