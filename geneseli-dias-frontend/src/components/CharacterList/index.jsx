import React, { useEffect, useState } from 'react';
import Card from "../../components/Card";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch('https://swapi.py4e.com/api/people/');
      const data = await response.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <div className="card-container">
      {characters.map(character => (
        <Card key={character.url} character={character} />
      ))}
    </div>
  );
};

export default CharacterList;