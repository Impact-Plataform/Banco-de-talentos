import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { url } from "../../service/api";
import { useToast } from "@chakra-ui/react";

export const ApiContext = React.createContext({});

export const ApiProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [characters, setCharacters] = useState([]);

  const [page, setPage] = useState(1);

  const [movies, setMovies] = useState([]);
  const [species, setSpecies] = useState([]);

  const [selectedValue, setSelectedValue] = useState(1);
  const [selectedValueSpecie, setSelectedValueSpecie] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  const getCharacters = async () => {
    await axios
      .get(`${url}people/?page=${page}`)
      .then((response) => {
        let peopleCopy = response.data.results;
        let promises = [];
        for (let person of peopleCopy) {
          promises.push(
            axios.get(person.homeworld).then((response) => {
              person.homeworld = response.data.name;
            }),
            person.species.length > 0
              ? axios.get(person.species[0]).then((response) => {
                  person.species = response.data.name;
                })
              : (person.species = "Human"),
            ...person.films.map((film, i) =>
              axios.get(film).then((response) => {
                person.films[i] = response.data.title;
              })
            ),
            ...person.vehicles.map((vehicle, i) =>
              axios.get(vehicle).then((response) => {
                person.vehicles[i] = response.data.name;
              })
            ),
            ...person.starships.map((starship, i) =>
              axios.get(starship).then((response) => {
                person.starships[i] = response.data.name;
              })
            )
          );
        }
        Promise.all(promises).then(() => {
          setCharacters(peopleCopy);
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error(error);
      });
    getMovies();
    getAllSpecies();
  };

  useEffect(() => {
    getCharacters();
  }, [page]);

  const getCharacterByName = async () => {
    await axios
      .get(`${url}people/?search=${inputValue}`)
      .then((response) => {
        let peopleCopy = response.data.results;
        if (peopleCopy.length === 0) {
          toast({
            title: "Nenhum personagem encontrado",
            description:
              "Não foi encontrado nenhum personagem com o nome especificado.",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
          return;
        }
        let promises = [];
        for (let person of peopleCopy) {
          promises.push(
            axios.get(person.homeworld).then((response) => {
              person.homeworld = response.data.name;
            }),
            person.species.length > 0
              ? axios.get(person.species[0]).then((response) => {
                  person.species = response.data.name;
                })
              : (person.species = "Human")
          );
        }
        Promise.all(promises).then(() => {
          setCharacters(peopleCopy);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getMovies = async () => {
    await axios
      .get(`${url}films/`)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const previousPage = () => {
    if (page >= 1) {
      setPage(page - 1);
    }
  };
  const nextPage = () => {
    if (page < 10) {
      setPage(page + 1);
    }
  };

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

  const getAllSpecies = async () => {
    const apiUrl = "https://swapi.dev/api/species/";
    const allSpecies = await getAllDataFromApi(apiUrl);
    setSpecies(allSpecies);
  };

  return (
    <ApiContext.Provider
      value={{
        inputValue,
        setInputValue,
        characters,
        getCharacters,
        page,
        previousPage,
        nextPage,
        movies,
        setMovies,
        getMovies,
        species,
        getCharacterByName,
        selectedValue,
        setSelectedValue,
        selectedValueSpecie,
        setSelectedValueSpecie,
        selectedGender,
        setSelectedGender,
        getAllDataFromApi,
        loading,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => React.useContext(ApiContext);
