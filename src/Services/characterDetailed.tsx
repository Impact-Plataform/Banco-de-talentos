import axios from "axios";
import characterInfo from '../assets/MoreAboutCharacters/charactersInfo.json'
import filmsInfo from '../assets/MoreAboutCharacters/films.json'
import { CharacterTYPE } from "../Types";

export async function getDetailedCharacter(character: any, setCharactersList: any) {
    axios.get(`https://swapi.py4e.com/api/people/?search=${character}`).then((response => {

        let characterHolder: CharacterTYPE[] = [];
        response.data.results.forEach((character: any) => characterHolder.push(character));

        if (response.data.count > 0) {
            characterHolder.forEach(async (character: any) => {
                const characterMoreInfo = characterInfo.find((item: any) => item.name === character.name)
                let films: any = [];

                const homeworldResponse = await axios.get(character.homeworld);
                const speciesResponse = await axios.get(character.species);

                const filmsPromises = character.films.map((film: any) => axios.get(film));
                const filmsResponses = await Promise.all(filmsPromises);


                setTimeout(() => {
                    filmsResponses.map((response) => films.push(filmsInfo.find((item: any) => item.name === response.data.title)));
                    character.films = films;


                }, 100)

                character.image = characterMoreInfo?.image;
                character.quote = characterMoreInfo?.quote;
                character.description = characterMoreInfo?.description;

                character.homeworld = homeworldResponse.data.name
                character.species = speciesResponse.data.name


            });

            setTimeout(() => {
                setCharactersList(characterHolder);

            }, 350)

        }
        if (response.data.count === 0) {
            setCharactersList('Character not found');
        }


    }))
}