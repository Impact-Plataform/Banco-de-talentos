import "./stylesChosenCharacterInfo.css";

import { useEffect, useMemo, useState } from "react";
import { StarWarsCharacter } from "../interfaces/StarWarsCharacter";
import { api } from "../../services/api";
import { getEndpoint } from "../../utils/getEndpoint";

interface ChosenCharacterInfoProps {
  character: StarWarsCharacter;
}

export const ChosenCharacterInfo = ({
  character,
}: ChosenCharacterInfoProps) => {
  const [specieName, setSpecieName] = useState<string>("loading...");
  const [filmsNames, setFilms] = useState<string[]>([]);
  const [homeWorldName, setHomeWorldName] = useState<string>("loading...");

  const {
    name,
    birth_year,
    mass,
    species,
    films,
    eye_color,
    gender,
    height,
    homeworld,
  } = character;

  useEffect(() => {
    species.length > 0
      ? api
          .get(getEndpoint(species[0]))
          .then((res) => setSpecieName(res.data.name))
      : setSpecieName("Unknown");

  }, []);

  return (
    <main className="character-info__container">
      <div className="character-info__info">
        <h3 className="character-info__title">Name:</h3>
        <h4 className="character-info__value">{name}</h4>
      </div>
      <div className="character-info__info">
        <h3 className="character-info__title">Homeworld:</h3>
        <h4 className="character-info__value">{homeWorldName}</h4>
      </div>
      <div className="character-info__info">
        <h3 className="character-info__title">Birth year:</h3>
        <h4 className="character-info__value">{birth_year}</h4>
      </div>
      <div className="character-info__info">
        <h3 className="character-info__title">Gender:</h3>
        <h4 className="character-info__value">{gender}</h4>
      </div>
      <div className="character-info__info">
        <h3 className="character-info__title">Specie:</h3>
        <h4 className="character-info__value">{specieName}</h4>
      </div>
      <div className="character-info__info">
        <h3 className="character-info__title">Eye color:</h3>
        <h4 className="character-info__value">{eye_color}</h4>
      </div>
      <div className="character-info__info">
        <h3 className="character-info__title">Mass:</h3>
        <h4 className="character-info__value">{mass}</h4>
      </div>
      <div className="character__info">
        <h3 className="character__info__title">Height:</h3>
        <h4 className="character__info__value">{height} cm</h4>
      </div>
    </main>
  );
};
