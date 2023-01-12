import React from "react";
import Modal from "../Modal/Modal";

const Card = ({
  id,
  imageId,
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
}) => {

  const idModal = {id}


  return (
    
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
          <img src={imageId} className="card-img-top" alt="personagens"/>
            <h5 className="card-title text-center">{nome}</h5>
            
            <Modal idModal={id} nome={nome} genero={genero} altura={altura} peso={peso} corDoCabelo={corDoCabelo} corDosOlhos={corDosOlhos} CorDaPele={CorDaPele} especie={especie} anoDeNascimento={anoDeNascimento} planeta={planeta} filmes={filmes}/>
          
          </div>
          
        </div>
      </div>
  );
};

export default Card;
