import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { images } from "../../assets/images";

function CharacterDetails() {
  const { id } = useParams();
    const [character, setCharacter] = useState([{name: ''}]);

  const fetchCharacters = async () => {
    const { data } = await axios.get(`https://swapi.py4e.com/api/people/${id}`);

    setCharacter(data.results);
    console.log("character", character);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="movie-details-wrapper">
      <div className="movie-details-return-btn">
        <Link to="/">
          <button>Voltar</button>
        </Link>
      </div>
      <div className="movie-details-poster-wrapper">
        <div className="movie-details-poster-container">
          <img src={images.characters[character.name]} alt="movie poster" />
        </div>
        <div className="movie-details-info">
          <h1>{character.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default CharacterDetails;
