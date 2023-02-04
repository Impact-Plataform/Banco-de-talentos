import React from "react";
import { useState, useCallback, useEffect} from "react";
import axios from "axios";
import { url } from "../../service/api";
import { useLocation } from "react-router-dom";
import { Render } from "../../components/RenderAllCharacters";

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

  /*const getCharacters = async () => {
    await axios
      .get(`${url}people/?page=${page}`)
      .then((response)=>{
        let peopleCopy = response.data.results;
        let promises = [];
        for(let person of peopleCopy){
          promises.push(
            //homeworld call (get the names from given api call)
            axios.get(person.homeworld)
              .then((response)=>{
                person.homeworld = response.data.name;
              }),
            //species call (get the names from given api call)
            person.species.length > 0 ?
              axios.get(person.species[0])
                .then((response)=>{
                  person.species = response.data.name;
                })
            : person.species = 'Human'

          )
        }
        //waits until all http requests have been loaded properly one by one
        Promise.all(promises).then(() => {setCharacters(peopleCopy)});
      })
      .catch((error)=>{
      })    
      getMovies()
      getAllSpecies()
  };

  useEffect(()=>{
  getCharacters();
  },[]);*/

  const getCharacters = async () => {
    await axios
      .get(`${url}people/?page=${page}`)
      .then((response) => {
        let peopleCopy = response.data.results;
        let promises = [];
        for (let person of peopleCopy) {
          promises.push(
            // homeworld call (get the names from given api call)
            axios.get(person.homeworld)
              .then((response) => {
                person.homeworld = response.data.name;
              }),
            // species call (get the names from given api call)
            person.species.length > 0
              ? axios.get(person.species[0])
                .then((response) => {
                  person.species = response.data.name;
                })
              : person.species = 'Human',
            // films call
            ...person.films.map((film, i) =>
              axios.get(film)
                .then((response) => {
                  person.films[i] = response.data.title;
                })
            ),
            // vehicles call
            ...person.vehicles.map((vehicle, i) =>
              axios.get(vehicle)
                .then((response) => {
                  person.vehicles[i] = response.data.name;
                })
            ),
            // starships call
            ...person.starships.map((starship, i) =>
              axios.get(starship)
                .then((response) => {
                  person.starships[i] = response.data.name;
                })
            )
          );
        }
        
        // Wait until all HTTP requests have been loaded
        Promise.all(promises).then(() => {
          setCharacters(peopleCopy);
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
  }, []);
  console.log(characters)
  

  const getCharacterByName = async () => {
    await axios
    .get(`${url}people/?search=${inputValue}`)
    .then((response)=>{
        let peopleCopy = response.data.results;
        let promises = [];
        for(let person of peopleCopy){
          promises.push(
            //homeworld call (get the names from given api call)
            axios.get(person.homeworld)
              .then((response)=>{
                person.homeworld = response.data.name;
              }),
            //species call (get the names from given api call)
            person.species.length > 0 ?
              axios.get(person.species[0])
                .then((response)=>{
                  person.species = response.data.name;
                })
            : person.species = 'Human'
          )
        }
        //waits until all http requests have been loaded properly one by one
        Promise.all(promises).then(() => {setCharacters(peopleCopy)});
      })
    .catch((error) => {})
  }

  /*const getPeopleFromSpecies = async () => {
    await axios
      .get("https://swapi.dev/api/species/")
      .then(response => {
        const allSpecies = response.data.results;
        const peopleRequests = allSpecies.map(specie => axios.get(specie.people));
        Promise.all(peopleRequests)
          .then(peopleResponses => {
            if (peopleResponses.length) {
              const people = peopleResponses.map(res => res.data.results);
              setSpecieAndPeople(people);
            } else {
              console.log("Array is empty");
            }
          })
          .catch(error => {
            console.log(error);
          });
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  getPeopleFromSpecies()
  console.log(specieAndPeople)*/

  const getMovies = async () => {
    await axios
    .get(`${url}films/`)
    .then((response)=>{
      setMovies(response.data.results)})
    .catch((error)=>{
    })    
  }
console.log(movies)

/*const getSpecies = async () => {
    await axios
    .get(`${url}species/`)
    .then((response)=>{
      setSpecies(response.data.results)})
    .catch((error)=>{
    })    
  }
console.log(species)*/

 /* const getVehicles = useCallback(async () =>{
    let promises=[];
    let vehicles=[];
    if(specificCard){
        for(let vehicle of specificCard.vehicles){
            promises.push(
                await axios.get(vehicle)
                    .then((response)=>{
                        vehicles.push(response.data.name);
                    })
            )
        }
        Promise.all(promises).then(()=>setVehicles(vehicles))
    } 
},[specificCard])*/

/*const getStarships = useCallback(async () =>{
    let promises=[];
    let starships=[];
    if(specificCard){
        for(let starship of specificCard.starships){
            promises.push(
                await axios.get(starship)
                    .then((response)=>{
                        starships.push(response.data.name);
                    })
            )
        }
        Promise.all(promises).then(()=>setStarships(starships))
    }        
},[specificCard])

//loads vehicle and starship data as the user clicks on a card
useEffect(()=>{
    getStarships();
},[characters,getStarships])

console.log(vehicles)
console.log(cardId)
console.log(page)*/
  

  const previousPage = () => {
    if (page >= 1) {
      setPage(page - 1);
      getCharacters();
    }
  };
  const nextPage = () => {
    if (page < 100) {
      setPage(page + 1);
      getCharacters();
    }
  };

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

/*const getAllSpeciesFromApi = async (url) => {
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
}*/

const getAllSpecies = async () => {
    const apiUrl = "https://swapi.dev/api/species/";
    const allSpecies = await getAllDataFromApi(apiUrl);
    console.log(allSpecies);
    setSpecies(allSpecies)
}
console.log(species)

  
  const getRelatedData = async (urls) => {
    const promises = urls.map(async (url) => {
      const response = await axios.get(url);
      return response.data;
    });
    return Promise.all(promises);
  }
  
  const PeopleList = () => {

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
      console.log(allPeople)
    }
    
   
    

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
        PeopleList,
        getCharacterByName,
        selectedValue,
        setSelectedValue,
        selectedValueSpecie,
        setSelectedValueSpecie,
        selectedGender,
        setSelectedGender,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => React.useContext(ApiContext);
