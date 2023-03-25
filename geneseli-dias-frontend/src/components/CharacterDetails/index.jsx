import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    const fetchCharacter = async () => {
      const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
      const data = await response.json();
      setCharacter(data);
    };

    fetchCharacter();
  }, [id]);

  return (
    <div className="container">
      <h1>{character.name}</h1>
      <p>Height: {character.height}</p>
      <p>Mass: {character.mass}</p>
      <p>Hair Color: {character.hair_color}</p>
      <p>Skin Color: {character.skin_color}</p>
      <p>Eye Color: {character.eye_color}</p>
      <p>Birth Year: {character.birth_year}</p>
      <p>Gender: {character.gender}</p>
    </div>
  );
};

export default CharacterDetails;