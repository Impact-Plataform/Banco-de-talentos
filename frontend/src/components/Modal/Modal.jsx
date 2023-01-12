import React from "react";
import svg from "../../assets/images/stormtrooper.svg";

const Modal = ({
  idModal,
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
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
        key={idModal}
      >
        Ver mais
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
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
              <p className="card-text">Gênero: <strong>{genero}</strong></p>
              <p className="card-text">Altura: <strong>{altura} m </strong></p>
              <p className="card-text">Peso: <strong>{peso} kg </strong></p>
              <p className="card-text">Cor do cabelo: <strong>{corDoCabelo}</strong></p>
              <p className="card-text">Cor dos olhos: <strong>{corDosOlhos}</strong></p>
              <p className="card-text">Cor da pele: <strong>{CorDaPele}</strong></p>
              <p className="card-text">Espécie: <strong>{especie}</strong></p>
              <p className="card-text">Ano de Nascimento: <strong>{anoDeNascimento}</strong></p>
              <p className="card-text">Planeta Natal: <strong>{planeta}</strong></p>
              <p className="card-text">Filmes em que aparece: <strong>{filmes}</strong></p>
            </div>
            <div className="modal-footer">
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
