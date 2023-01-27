import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { adaptNameToUrl } from "../../utils/adaptNameToUrl";
import { getFirstName } from "../../utils/getFirstName";
import { ModalBase } from "../modalBase/ModalBase";
import "./stylesModalCharacterInfos.css";

interface ModalCharacterInfosProps {
  character: any;
  specieName: string;
  modalOpen: boolean;
  closeModal: () => void;
}

export const ModalCharacterInfos = ({
  modalOpen,
  closeModal,
  character,
  specieName,
}: ModalCharacterInfosProps) => {
  const { name, height, mass, gender, eye_color } = character;

  const navigate = useNavigate();

  const navigateToCharacterPage = () => {
    const characterNameParam = adaptNameToUrl(name);
    navigate(`/profile/${characterNameParam}`);
  };

  return (
    <ModalBase closeModal={closeModal} isOpen={modalOpen}>
      <section className="modal-character-info__container">
        <div className="modal-character-info__infos">
          <h3 className="info__title">Name:</h3>
          <h4 className="info__value">{name}</h4>
        </div>
        <div className="modal-character-info__infos">
          <h3 className="info__title">Height:</h3>
          <h4 className="info__value">{height}</h4>
        </div>
        <div className="modal-character-info__infos">
          <h3 className="info__title">Mass:</h3>
          <h4 className="info__value">{mass}</h4>
        </div>
        <div className="modal-character-info__infos">
          <h3 className="info__title">specie:</h3>
          <h4 className="info__value">{specieName}</h4>
        </div>
        <div className="modal-character-info__infos">
          <h3 className="info__title">Gender:</h3>
          <h4 className="info__value">{gender}</h4>
        </div>
        <div className="modal-character-info__infos">
          <h3 className="info__title">Eye color:</h3>
          <h4 className="info__value">{eye_color}</h4>
        </div>
        <button
          className="modal-character-info__button"
          onClick={navigateToCharacterPage}
        >
          {getFirstName(name)}'s Profile
        </button>
      </section>
    </ModalBase>
  );
};
