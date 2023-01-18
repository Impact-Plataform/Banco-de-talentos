import axios from 'axios';

const PEOPLE_URL = 'https://swapi.py4e.com/api/people/';
const FILMS_URL = 'https://swapi.py4e.com/api/films/';
const SPECIES_URL = 'https://swapi.py4e.com/api/species/';
let people = [];

const getCharacters = async (url = PEOPLE_URL) => {
  try {
    const { data } = await axios.get(url);
    people = people.concat(data.results);
    if (data.next) {
      await getCharacters(data.next);
    }
    return people;
  } catch (error) {
    throw new Error(`Error getting swapi people: ${error}`);
  }
};

const getMovieTitles = async (url = FILMS_URL) => {
  let films = {};

  try {
    const {
      data: { results: movies },
    } = await axios.get(url);

    for (let { url, title } of movies) {
      films[url] = title;
    }
    return films;
  } catch (error) {
    throw new Error(`Error getting movie titles: ${error}`);
  }
};

const getSpeciesNames = async (url = SPECIES_URL) => {
  let species = {};

  try {
    const { data } = await axios.get(url);

    const speciesTypes = data.results;
    for (let { url, name } of speciesTypes) {
      species[url] = name;
    }

    if (data.next) {
      await getSpeciesNames(data.next);
    }

    return species;
  } catch (error) {
    throw new Error(`Error getting  specie names: ${error}`);
  }
};

export const getAllData = async () => {
  try {
    let people = await getCharacters();
    let filmsTypes = await getMovieTitles();
    let speciesTypes = await getSpeciesNames();

    const result = people.map(person => {
      const titles = person.films.map(film => filmsTypes[film]);
      const speciesNames = person.species.map(specie => speciesTypes[specie]);

      return { ...person, movies: titles, specie: speciesNames };
    });
    console.log(JSON.stringify(result, null, 2));
    return result;
  } catch (error) {
    throw new Error(`Error adding filtered data to characters: ${error}`);
  }
};
