import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { getEndpoint } from "../../utils/getEndpointimport { ModalCharacterInfos } from "../modalCharacterInfos/ModalCharacterInfos";
import "./stylesCharacterCard.css";

interface CharacterCardProps {
  character: any;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const [specieName, setSpecieName] = useState("Unknown");
  const { name, species, gender } = character;
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    species[0] &&
      api
        .get(getEndpoint(species[0]))
        .then((res) => setSpecieName(res.data.name));
  }, []);

  return (
    <li className="card__container">
      <div className="card__info">
        <h3 className="card__info__title">Name:</h3>
        <h4 className="card__info__value">{name}</h4>
      </div>
      <div className="card__info">
        <h3 className="card__info__title">specie:</h3>
        <h4 className="card__info__value">{specieName}</h4>
      </div>
      <div className="card__info">
        <h3 className="card__info__title">Gender:</h3>
        <h4 className="card__info__value">{gender}</h4>
      </div>
      <button className="card__button" onClick={() => setModalOpen(true)}>
        SEE MORE
      </button>
      <ModalCharacterInfos
        character={character}
        modalOpen={modalOpen}
        closeModal={() => setModalOpen(false)}
        specieName={specieName}
        key={"modal"}
      />
    </li>
  );
};
