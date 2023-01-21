import React from "react";
import svg from "../../assets/images/icones/stormtrooper.svg";

const Modal = ({
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
  idModal,
}) => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target={"#" + idModal.toString()}
      >
        Ver mais
      </button>

      <div
        className="modal fade"
        id={idModal}
        data-bs-backdrop="static"
        data-bs-keyboard="true"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="staticBackdropLabel"
                translate="no"
              >
                {nome}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p className="card-text">
                Gender: <strong>{genero}</strong>
              </p>
              <p className="card-text">
                Height: <strong>{altura} cm </strong>
              </p>
              <p className="card-text">
                Mass: <strong>{peso} kg </strong>
              </p>
              <p className="card-text">
                Hair color: <strong>{corDoCabelo}</strong>
              </p>
              <p className="card-text">
                Eye color: <strong>{corDosOlhos}</strong>
              </p>
              <p className="card-text">
                Skin color: <strong>{pele}</strong>
              </p>
              <p className="card-text">
                Specie: <strong>{especie}</strong>
              </p>
              <p className="card-text">
                Birth year: <strong>{anoDeNascimento} *</strong>
              </p>
              <p className="card-text">
                Homeworld: <strong>{planeta}</strong>
              </p>
              <p className="card-text">
                Films: <strong>{filmes}</strong>
              </p>
            </div>
            <div className="modal-footer d-flex flex-column p-0">
            <p className="fst-italic" style={{ fontSize: 13 + "px", textAlign: "justify"}}>
                * O ano de nascimento do personagem, usa o padrão do universo de
                <strong> BBY</strong> ou <strong>ABY </strong>- Antes da Batalha
                de Yavin ou Após a Batalha de Yavin. A Batalha de Yavin é uma
                batalha que ocorre no final do episódio IV de Star Wars: Uma
                Nova Esperança.
              </p>
              <img
                src={svg}
                alt="icone stormtrooper"
                style={{ width: 3 + "em" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
