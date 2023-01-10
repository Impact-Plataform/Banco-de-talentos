import axios from "axios";
import { CharacterTYPE } from "../Types";
import { characterDetailsHandler } from "./characterDetailsHandler";


export async function getDetailedCharacter(character: any, setCharactersList: React.Dispatch<React.SetStateAction<string | CharacterTYPE[]>>) {
    axios.get(`https://swapi.py4e.com/api/people/?search=${character}`).then((response => {
        let characterHolder: CharacterTYPE[] = [];
        response.data.results.forEach((character: CharacterTYPE) => characterHolder.push(character));

        // se houver pelo menos um personagem
        if (response.data.count > 0) {
            getCharacterData(characterHolder);
            setTimeout(() => {
                setCharactersList(characterHolder);
            }, 350)
        }
        else {
            // Caso não haja um personagem
            setCharactersList('Character not found');
        }
    }))
}

async function getCharacterData(charactersList: CharacterTYPE[], ) {
    charactersList.forEach(async (character: any) => {
        characterDetailsHandler(character);

    });
}