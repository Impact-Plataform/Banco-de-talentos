import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StarWarsPeople() {
  const [people, setPeople] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPerson, setSelectedPerson] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`https://swapi.py4e.com/api/people/`);
      setPeople(response.data.results);
    }
    fetchData();
  }, []);

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  function handlePersonClick(person) {
    setSelectedPerson(person);
  }

  const filteredPeople = people.filter(person => {
    return person.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {filteredPeople.map(person => (
            <tr key={person.url} onClick={() => handlePersonClick(person)}>
              <td>{person.name}</td>
              <td>{person.height}</td>
              <td>{person.mass}</td>
              <td>{person.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedPerson && (
        <div>
          <h2>{selectedPerson.name}</h2>
          <p>Height: {selectedPerson.height}</p>
          <p>Mass: {selectedPerson.mass}</p>
          <p>Gender: {selectedPerson.gender}</p>
        </div>
      )}
    </div>
  );
}

export default StarWarsPeople;
