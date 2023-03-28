import React, { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [info, setInfo] = useState([]);
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [planets, setPlanets] = useState([]);

  const context = {
    info: info,
    setInfo: setInfo,
    people: people,
    setPeople: setPeople,
    films: films,
    setFilms: setFilms,
    species: species,
    setSpecies: setSpecies,
    starships: starships,
    setStarships: setStarships,
    vehicles: vehicles,
    setVehicles: setVehicles,
    planets: planets,
    setPlanets: setPlanets,
  };

  return (
    <StateContext.Provider value={context}>{children}</StateContext.Provider>
  );
};

export default StateProvider;
