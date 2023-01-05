import axios from "axios";
import characterInfo from '../assets/MoreAboutCharacters/charactersInfo.json'
import { CharacterTYPE } from "../Types";

export async function getDetailedCharacter(character: any, setCharactersList: any) {
    axios.get(`https://swapi.py4e.com/api/people/?search=${character}`).then((response => {

        let characterHolder: CharacterTYPE[] = [];
        response.data.results.forEach((character: any) => characterHolder.push(character));

        if (response.data.count > 0) {
            characterHolder.forEach(async (character: any) => {
                const characterMoreInfo = characterInfo.find((item: any) => item.name === character.name)

                const homeworldResponse = await axios.get(character.homeworld);
                const specieResponse = await axios.get(character.species);


                character.image = characterMoreInfo?.image;
                character.quote = characterMoreInfo?.quote;


                character.homeworld = homeworldResponse.data.name
                character.species = specieResponse.data.name

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