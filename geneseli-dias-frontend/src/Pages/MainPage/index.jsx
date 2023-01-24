import React, { useEffect, useState } from 'react';

import MovieCard from '../../components/MovieCard';
import MovieHeader from '../../components/MovieHeader';

function MainPage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?page=2")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results));
  }, []);

  return (
    <div className="main-page">
        <h1>Star Wars</h1>
        <ul>
          {characters.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>    
      
    </div>

  );
  
}


export default MainPage;
