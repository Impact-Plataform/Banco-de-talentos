import axios from "axios";
import { CharacterTYPE } from "../Types";
import { characterDetailsHandler } from "./characterDetailsHandler";


export async function getDetailedCharacter(character: string, setCharactersList: React.Dispatch<React.SetStateAction<string | CharacterTYPE[]>>) {
    axios.get(`https://swapi.py4e.com/api/people/?search=${character}`).then((response => {
        let characterHolder: CharacterTYPE[] = [];
        response.data.results.forEach(async (character: CharacterTYPE) => characterHolder.push(character));


        let applyDetailsToCharacters = characterHolder.map(async (character: CharacterTYPE) => {
            await characterDetailsHandler(character);
            return character;

        });

        Promise.all(applyDetailsToCharacters).then((response) => {
            if (response.length === 0) {
                setCharactersList('Character not found')
            } else {
                setCharactersList(response);
            }
        })



    }))
}
