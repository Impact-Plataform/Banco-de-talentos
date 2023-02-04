import React, { useState, useEffect } from "react";
import axios from "axios";
import { useApi } from "../../contexts/ApiProvider";

/*async function getDataFromApi(url) {
  const response = await axios.get(url);
  return response.data;
}

async function getAllDataFromApi(url, pageNumber) {
  let allData = [];
  while (true) {
    const data = await getDataFromApi(`${url}?page=${pageNumber}`);
    if (!data.next) {
      allData = allData.concat(data.results);
      break;
    }
    allData = allData.concat(data.results);
    pageNumber++;
  }
  return allData;
}

async function getRelatedData(urls) {
  const promises = urls.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
}*/

export const PeopleList = () => {

    const { allPeople} = useApi
  /*const [allPeople, setAllPeople] = useState([]);
  const apiUrl = "https://swapi.dev/api/people/";

  useEffect(() => {
    async function fetchData() {
      const people = await getAllDataFromApi(apiUrl, 1);
      const peopleWithRelatedData = await Promise.all(
        people.map(async (person) => {
          const relatedData = await getRelatedData([
            ...person.films,
            ...person.vehicles,
            ...person.starships,
            ...person.species,
          ]);
          return {
            ...person,
            films: relatedData.slice(0, person.films.length),
            vehicles: relatedData.slice(
              person.films.length,
              person.films.length + person.vehicles.length
            ),
            starships: relatedData.slice(
              person.films.length + person.vehicles.length,
              person.films.length +
                person.vehicles.length +
                person.starships.length
            ),
            species: relatedData.slice(
              person.films.length +
                person.vehicles.length +
                person.starships.length,
              person.films.length +
                person.vehicles.length +
                person.starships.length +
                person.species.length
            ),
          };
        })
      );
      setAllPeople(peopleWithRelatedData);
    }
    fetchData();
  }, []);*/

  return (
    <ul>
      {allPeople.map((person, index) => (
        <li key={index}>
          <p>{person.name}</p>
          <ul>
            <li>Films:</li>
            <ul>
              {person.films.map((film, index) => (
                <li key={index}>{film.title}</li>
              ))}
            </ul>
          </ul>
        </li>
      ))}
    </ul>
  );
};
/*import React, { useState, useEffect } from "react";
import axios from "axios";

async function getDataFromApi(url) {
    const response = await axios.get(url);
    return response.data;
}

export const PeopleLisst = () => {
    const [person, setPerson] = useState({});
    const [films, setFilms] = useState([]);
    const [vehicles, setVehicles] = useState([]);
    const [starships, setStarships] = useState([]);
    const [species, setSpecies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const [personData, filmsData, vehiclesData, starshipsData, speciesData] = await Promise.all([
                getDataFromApi('https://swapi.dev/api/people/1/'),
                getDataFromApi(person.films),
                getDataFromApi(person.vehicles),
                getDataFromApi(person.starships),
                getDataFromApi(person.species)
            ]);
            setPerson(personData);
            setFilms(filmsData);
            setVehicles(vehiclesData);
            setStarships(starshipsData);
            setSpecies(speciesData);
        }
        fetchData();
    }, [person]);

    console.log(vehicles)

    return (
        <div>
            <h1>{person.name}</h1>
            <h2>Films</h2>
            <ul>
                {films.map((film, index) => (
                    <li key={index}>{film.title}</li>
                ))}
            </ul>
            <h2>Vehicles</h2>
            <ul>
                {vehicles.map((vehicle, index) => (
                    <li key={index}>{vehicle.name}</li>
                ))}
            </ul>
            <h2>Starships</h2>
            <ul>
                {starships.map((starship, index) => (
                    <li key={index}>{starship.name}</li>
                ))}
            </ul>
            <h2>Species</h2>
            <ul>
                {species.map((specie, index) => (
                    <li key={index}>{specie.name}</li>
                ))}
            </ul>
        </div>
    );
}
//PeopleList('https://swapi.dev/api/films/1/')*/

/*import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

const DataContext = createContext();

async function getDataFromApi(url) {
  const response = await axios.get(url);
  return response.data;
}

async function getAllDataFromApi(url, pageNumber) {
  let allData = [];
  while (true) {
    const data = await getDataFromApi(`${url}?page=${pageNumber}`);
    if (!data.next) {
      allData = allData.concat(data.results);
      break;
    }
    allData = allData.concat(data.results);
    pageNumber++;
  }
  return allData;
}

async function getRelatedData(urls) {
  const promises = urls.map(async (url) => {
    const response = await axios.get(url);
    return response.data;
  });
  return Promise.all(promises);
}

export const PeopleList = () => {
  const [allPeople, setAllPeople] = useState([]);
  const apiUrl = "https://swapi.dev/api/people/";

  useEffect(() => {
    async function fetchData() {
      const people = await getAllDataFromApi(apiUrl, 1);
      const peopleWithRelatedData = await Promise.all(
        people.map(async (person) => {
          const relatedData = await getRelatedData([
            ...person.films,
            ...person.vehicles,
            ...person.starships,
            ...person.species,
          ]);
          return {
            ...person,
            films: relatedData.slice(0, person.films.length),
            vehicles: relatedData.slice(
              person.films.length,
              person.films.length + person.vehicles.length
            ),
            starships: relatedData.slice(
              person.films.length + person.vehicles.length,
              person.films.length +
                person.vehicles.length +
                person.starships.length
            ),
            species: relatedData.slice(
              person.films.length +
                person.vehicles.length +
                person.starships.length,
              person.films.length +
                person.vehicles.length +
                person.starships.length +
                person.species.length
            ),
          };
        })
      );
      setAllPeople(peopleWithRelatedData);
    }
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ allPeople }}>
      {allPeople.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </DataContext.Provider>
  );
};

const Person
*/

/*import React, { useState, useEffect, useContext } from "react";
import { PeopleContext } from "./PeopleContext";

export const PeopleList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { allPeople } = useContext(PeopleContext);

  const filteredPeople = allPeople.filter(person => {
    return person.species[0].name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Search by species" 
      />
      <ul>
        {filteredPeople.map(person => (
          <li key={person.url}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
*/

/*const [filteredCharacters, setFilteredCharacters] = useState([]);

const handleFilterChange = (selectedValue) => {
  const newFilteredCharacters = characters.filter(character => {
    return character.films.some(film => film.title === selectedValue) ||
           character.species && character.species.includes(selectedValue);
  });

  setFilteredCharacters(newFilteredCharacters);
}

return (
  <div>
    <Select onChange={handleFilterChange} />
    <Select onChange={handleFilterChange} />
    {filteredCharacters.map(character => (
      <Card character={character} />
    ))}
  </div>
);
*/