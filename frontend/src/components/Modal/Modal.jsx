import React from "react";
import svg from "../../assets/images/stormtrooper.svg"

const Modal = () => {
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary d-flex justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
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
                Nome do personagem
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">atributos</div>
            <div className="modal-footer">
              <img src={svg} alt="icone stormtrooper" style={{width: 3 + 'em'}}/>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
