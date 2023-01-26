import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { getEndpoint } from "../../utils/getEndpoint";
import "./stylesCharacterCard.css";

interface CharacterCardProps {
  // name: string;
  // height: number;
  // mass: number;
  // specie: string;
  // gender: string;
  character: any;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const [specieName, setSpecieName] = useState("Unknown");
  const { name, height, mass, species, gender } = character;

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
      <button className="card__button">SEE MORE</button>
    </li>
  );
};
