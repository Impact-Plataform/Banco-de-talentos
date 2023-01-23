import React, { useEffect, useState } from 'react';

import MovieCard from '../../components/MovieCard';
import MovieHeader from '../../components/MovieHeader';

function MainPage() {
    const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people/?page=2")
      .then((response) => response.json())
      .then((data) => setPersonagens(data.results));
  }, []);

  return (
    <div className="App">
      <h1>Star Wars</h1>
      <ul>
        {personagens.map((personagem) => (
          <li key={personagem.name}>{personagem.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default MainPage;
