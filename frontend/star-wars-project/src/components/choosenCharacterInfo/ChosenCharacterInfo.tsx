import "./stylesChosenCharacterInfo.css";

import { useMemo, useState } from "react";
import { StarWarsCharacter } from "../interfaces/StarWarsCharacter";
import { api } from "../../services/api";
import { getEndpoint } from "../../utils/getEndpoint";
import axios from "axios";

interface ChosenCharacterInfoProps {
  character: StarWarsCharacter;
}

export const ChosenCharacterInfo = ({
  character,
}: ChosenCharacterInfoProps) => {
  const [specieName, setSpecieName] = useState<string>("loading...");
  const [filmsNames, setFilmsNames] = useState<string[]>([]);
  const [homeWorldName, setHomeWorldName] = useState<string>("loading...");

  const addFilm = (film: string) =>
    setFilmsNames((filmsNames) => [...filmsNames, film]);

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

  useMemo(() => {
    species.length > 0
      ? api
          .get(getEndpoint(species[0]))
          .then((res) => setSpecieName(res.data.name))
      : setSpecieName("Unknown");

    homeworld.length > 0
      ? api
          .get(getEndpoint(homeworld))
          .then((res) => setHomeWorldName(res.data.name))
      : setSpecieName("unknown");
    films.length > 0 &&
      axios.all(films).then((allResponses) => {
        allResponses.forEach((filmResponse) => {
          api.get(getEndpoint(filmResponse)).then((res) => {
            addFilm(res.data.title);
          });
        });
      });
  }, []);

  console.log("filmsName --->", filmsNames);
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
      <div className="character-info__info character-info__info--movies">
        <h3 className="character-info__title character-info__title--movie">Movies:</h3>
        <ul className="character-info_movies_container">
          {filmsNames.length > 0 ? (
            filmsNames.map((film, index) => (
              <li>  
                {" "}
                <h5 className="character-info--movie_title">
                  {film}
                  {index < filmsNames.length - 1 && (
                    <span className="character-info--movie-comma"> ;</span>
                  )}
                </h5>
              </li>
            ))
          ) : (
            <h4 className="character-info__value">Unknown</h4>
          )}
        </ul>
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
        <h3 className="character-info__title">Height:</h3>
        <h4 className="character-info__value">{height} cm</h4>
      </div>
      <div className="character-info__info">
        <h3 className="character-info__title">Mass:</h3>
        <h4 className="character-info__value">{mass} kg</h4>
      </div>
    </main>
  );
};
