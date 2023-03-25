import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FilterMovies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.py4e.com/api/films/')
      .then(response => {
        setMovies(response.data.results);
        setFilteredMovies(response.data.results);
      })
      .catch(error => console.error(error));
  }, []);

  const handleFilter = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchTerm);
    });
    setFilteredMovies(filtered);
  };

  return (
    <div>
      <input type="text" onChange={handleFilter} />
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.url}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterMovies;

