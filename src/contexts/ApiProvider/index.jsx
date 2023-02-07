import React from "react";
import { useState, useCallback, useEffect} from "react";
import axios from "axios";
import { url } from "../../service/api";

export const ApiContext = React.createContext({});

export const ApiProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [characters, setCharacters] = useState([]);
  const [totalCount, setTotalCount] = useState();
  const [topics, setTopics] = useState([]);
  const [page, setPage] = useState(1);
  const [vehicles,setVehicles]=useState([]);
  const [starships,setStarships]=useState([]);
  const [movies,setMovies]=useState([]);
  const [species,setSpecies]=useState([]);
  const [allPeople,setAllPeople]=useState([]);
  const [specieAndPeople, setSpecieAndPeople] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1);
  const [selectedValueSpecie, setSelectedValueSpecie] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [loading, setLoading] = useState(true);


  const getCharacters = async () => {
    await axios
      .get(`${url}people/?page=${page}`)
      .then((response) => {
        let peopleCopy = response.data.results;
        let promises = [];
        for (let person of peopleCopy) {
          promises.push(
            axios.get(person.homeworld)
              .then((response) => {
                person.homeworld = response.data.name;
              }),
            person.species.length > 0
              ? axios.get(person.species[0])
                .then((response) => {
                  person.species = response.data.name;
                })
              : person.species = 'Human',
            ...person.films.map((film, i) =>
              axios.get(film)
                .then((response) => {
                  person.films[i] = response.data.title;
                })
            ),
            ...person.vehicles.map((vehicle, i) =>
              axios.get(vehicle)
                .then((response) => {
                  person.vehicles[i] = response.data.name;
                })
            ),
            ...person.starships.map((starship, i) =>
              axios.get(starship)
                .then((response) => {
                  person.starships[i] = response.data.name;
                })
            )
          );
        }
        Promise.all(promises).then(() => {
          setCharacters(peopleCopy)
          setLoading(false);
        });
      })
      .catch((error) => {
        console.error(error);
      });
      getMovies()
      getAllSpecies()
    
  };
  
  useEffect(() => {
    getCharacters();
  }, [page]);
  console.log(characters)
  

  const getCharacterByName = async () => {
    await axios
    .get(`${url}people/?search=${inputValue}`)
    .then((response)=>{
        let peopleCopy = response.data.results;
        let promises = [];
        for(let person of peopleCopy){
          promises.push(
            axios.get(person.homeworld)
              .then((response)=>{
                person.homeworld = response.data.name;
              }),
            person.species.length > 0 ?
              axios.get(person.species[0])
                .then((response)=>{
                  person.species = response.data.name;
                })
            : person.species = 'Human'
          )
        }
        Promise.all(promises).then(() => {setCharacters(peopleCopy)});
      })
    .catch((error) => {})
  }

  const getMovies = async () => {
    await axios
    .get(`${url}films/`)
    .then((response)=>{
      setMovies(response.data.results)})
    .catch((error)=>{
        console.error(error)
    })    
  }
console.log(movies)
  

  const previousPage = () => {
    if (page >= 1) {
        setPage(page - 1, () => getCharacters());
      }
  };
  const nextPage = () => {
    if (page < 10) {
        setPage(page + 1, () => getCharacters());
      }
  };
console.log(page)
  const getTopics = async () => {
    await axios
      .get(`${url}topics?q=${inputValue}&per_page=8`)
      .then((res) => {
        setTopics(res.data.items);
      })
      .catch((err) => console.log(err));
  };

const getDataFromApi = async (url, pageNumber) => {
    const response = await axios.get(`${url}?page=${pageNumber}`);
    return response.data;
}

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
}

const getAllSpecies = async () => {
    const apiUrl = "https://swapi.dev/api/species/";
    const allSpecies = await getAllDataFromApi(apiUrl);
    console.log(allSpecies);
    setSpecies(allSpecies)
}
console.log(species)

 
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
        loading
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => React.useContext(ApiContext);
