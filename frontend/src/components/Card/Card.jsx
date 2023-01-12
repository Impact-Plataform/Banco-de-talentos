import React from "react";
import Modal from "../Modal/Modal";

const Card = ({
  imageId,
  nome,
  altura,
  peso,
  corDoCabelo,
  roupa,
  corDosOlhos,
  especie,
  genero,
  filmes,
}) => {


  return (
    
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
          <img src={imageId} className="card-img-top" alt="personagens"/>
            <h5 className="card-title text-center">{nome}</h5>
            <p className="card-text">{genero}</p>
            <p className="card-text">{altura}</p>
            <p className="card-text">{peso}</p>
            <p className="card-text">{corDoCabelo}</p>
            <p className="card-text">{corDosOlhos}</p>
            <p className="card-text">{roupa}</p>
            <p className="card-text">{especie}</p>
            <p className="card-text">{filmes}</p>
            <Modal/>
          </div>
          
        </div>
      </div>
  );
};

export default Card;
