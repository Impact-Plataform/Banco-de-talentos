import { Text, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { MenuNav } from "../../components/MenuNav";
import axios from "axios";
import { Card } from "../../components/Card";
import { useApi } from "../../contexts/ApiProvider";
import { RadioComponent } from "../../components/RadioComponent";

export const FilteredCharacters = () => {
  const { selectedValue, selectedValueSpecie, setCharacters } = useApi();

  const [selectedFilm, setSelectedFilm] = useState("");
  const [selectedSpecies, setSelectedSpecies] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [allPeople, setAllPeople] = useState([]);
  //const [filteredCharacters, setFilteredCharacters] = useState("");

 
  const getDataFromApi = async (url, pageNumber) => {
    const response = await axios.get(`${url}?page=${pageNumber}`);
    return response.data;
  };

  const getAllDataFromApi = async (url) => {
    let pageNumber = 1;
    let allData = [];
    while (true) {
      const data = await getDataFromApi(url, pageNumber);
      if (!data.next) {
        allData = allData.concat(data.results);
        break;
      }
      allData = allData.concat(data.results);
      pageNumber++;
    }
    return allData;
  };

  const getRelatedData = async (urls) => {
    const promises = urls.map(async (url) => {
      const response = await axios.get(url);
      return response.data;
    });
    return Promise.all(promises);
  };

  const apiUrl = "https://swapi.dev/api/people/";

  useEffect(() => {
    async function fetchData() {
      const people = await getAllDataFromApi(apiUrl);
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
  console.log(allPeople);
  const filteredCharacters = allPeople.filter((character) => {
    return (
      character.films.some(film => film.title === selectedValue) ||
      character.species.some((specie) => specie.name === selectedValueSpecie)
      //character.gender === selectedGender
      
    );
        
  });
  console.log(selectedValue);
  console.log(filteredCharacters);
  

  return (
    <div>
      

      <div>
        <input
          type="radio"
          id="male"
          value="male"
          checked={selectedGender === "male"}
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        <label htmlFor="male">Male</label>

        <input
          type="radio"
          id="female"
          value="female"
          checked={selectedGender === "female"}
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        <label htmlFor="female">Female</label>

        <input
          type="radio"
          id="unkown"
          value="n/a"
          checked={selectedGender === "n/a"}
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        <label htmlFor="female">Unkown</label>

        <input
          type="radio"
          id="all"
          value=""
          checked={!selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        />
        <label htmlFor="all">All</label>
        <Flex alignItems={"center"} direction={"column"} w={"100%"}>
        <MenuNav />
        <Flex direction={'row'} wrap={'wrap'} w={1300} justifyContent={'center'}>
        {filteredCharacters.map((character) => (
            
                <Card character={character} />  
        ))}
        </Flex>
        </Flex>
     
      </div>
      <RadioComponent/>
    </div>
  );
};
