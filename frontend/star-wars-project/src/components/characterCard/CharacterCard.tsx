import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { getEndpoint } from "../../utils/getEndpoint";
import "./stylesCharacterCard.css";

interface CharacterCardProps {
  name: string;
  height: number;
  mass: number;
  specie: string[];
  gender: string;
}

export const CharacterCard = ({
  name,
  height,
  mass,
  specie,
  gender,
}: CharacterCardProps) => {
  const [characterSpecie, setCharacterSpecie] = useState<string>("unknown");
  console.log(characterSpecie);
  // useEffect(() => {
  //   specie.map((item) => {
  //     api.get(getEndpoint(item)).then((res) => ());
  //   });
  // }, []);

  return (
    <li className="card__container">
      <div className="card__info">
        <h3 className="card__info__title">Name:</h3>
        <h4 className="card__info__value">{name}</h4>
      </div>
      <div className="card__info">
        <h3 className="card__info__title">Height:</h3>
        <h4 className="card__info__value">{height}</h4>
      </div>
      <div className="card__info">
        <h3 className="card__info__title">Mass:</h3>
        <h4 className="card__info__value">{mass}</h4>
      </div>
      <div className="card__info">
        <h3 className="card__info__title">specie:</h3>
        <h4 className="card__info__value">{specie}</h4>
      </div>
      <div className="card__info">
        <h3 className="card__info__title">Gender:</h3>
        <h4 className="card__info__value">{gender}</h4>
      </div>
      <button className="card__button">SEE MORE</button>
    </li>
  );
};
