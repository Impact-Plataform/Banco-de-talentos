import React from "react";
import svg from "../../assets/images/icones/stormtrooper.svg";
import globe from "../../assets/images/icones/globe.svg"
import film from "../../assets/images/icones/film.svg"
import ballon from "../../assets/images/icones/ballon.svg"
import eye from "../../assets/images/icones/eye.svg"
import people from "../../assets/images/icones/people.svg"
import up from "../../assets/images/icones/up.svg"
import activity from "../../assets/images/icones/activity.svg"
import cut from "../../assets/images/icones/cut.svg"
import person from "../../assets/images/icones/person.svg"
import clipboard from "../../assets/images/icones/clipboard.svg"

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
        style={{fontFamily: "jedi"}}
      >
        ver mais
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
          <div className="modal-content bg-info">
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
              <img src={people} alt="icone de pessoas" /> Gender: <strong>{genero}</strong>
              </p>
              <p className="card-text">
              <img src={up} alt="icone de seta pra cima" />  Height: <strong>{altura}</strong>
              </p>
              <p className="card-text">
              <img src={clipboard} alt="icone de usuário" /> Mass: <strong>{peso}</strong>
              </p>
              <p className="card-text">
              <img src={cut} alt="icone de tesoura" /> Hair color: <strong>{corDoCabelo}</strong>
              </p>
              <p className="card-text">
              <img src={eye} alt="icone de olho" /> Eye color: <strong>{corDosOlhos}</strong>
              </p>
              <p className="card-text">
              <img src={person} alt="icone de usuário" />  Skin color: <strong>{pele}</strong>
              </p>
              <p className="card-text">
              <img src={ballon} alt="icone de calendário" /> Birth year: <strong>{anoDeNascimento} *</strong>
              </p>
              <p className="card-text">
              <img src={activity} alt="icone de atividade" />  Specie: <strong>{especie}</strong>
              </p>
              <p className="card-text">
              <img src={globe} alt="icone do planeta" /> Homeworld: <strong>{planeta}</strong>
              </p>
              <p className="card-text">
              <img src={film} alt="icone de filme" /> Films: <strong>{filmes}</strong>
              </p>
            </div>
            <div className="modal-footer d-flex flex-column p-0">
            <h6 className="fst-italic" style={{ fontSize: 13 + "px", textAlign: "justify"}}>
                * O ano de nascimento do personagem usa o padrão do universo de
                <strong> BBY</strong> ou <strong>ABY </strong>- Antes da Batalha
                de Yavin ou Após a Batalha de Yavin. A Batalha de Yavin é uma
                batalha que ocorre no final do episódio IV de Star Wars: Uma
                Nova Esperança.
              </h6>
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
