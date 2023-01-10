import axios from "axios";
import { CharacterDetails, FilmType } from "../Types";
import filmsInfo from '../assets/MoreAboutCharacters/films.json'
import characterInfo from '../assets/MoreAboutCharacters/charactersInfo.json'

export async function characterDetailsHandler(character: any) {
    let films:any = [];


    const characterMoreInfo: CharacterDetails | undefined = characterInfo.find((item: CharacterDetails ) => item.name === character.name);

    // Despacha o homeworld do personagem
    const homeworldResponse = await axios.get(character.homeworld);

    //Recupera os filmes de todos os personagens
    const filmsPromises = character.films.map(async(film: any) => axios.get(film));

    //Despacha todos os filmes
    const filmsResponses = await Promise.all(filmsPromises);
    filmsResponses.map((response) => films.push(filmsInfo.find((item: FilmType) => item.name === response.data.title) || {}))

    const speciesPromises = character.species.map(async(specie: any) => axios.get(specie));
    let speciesResponses = await Promise.all(speciesPromises);

    character.image = characterMoreInfo?.image;
    character.filmsDetails = films;
    character.films = filmsResponses.map((response) => response.data.title);
    character.quote = characterMoreInfo?.quote;
    character.description = characterMoreInfo?.description;
    character.species = speciesResponses.map((response: any) => response.data.name);
    character.homeworld = homeworldResponse.data.name;

}