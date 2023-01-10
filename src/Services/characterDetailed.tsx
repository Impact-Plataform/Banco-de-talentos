import axios from "axios";
import { CharacterTYPE } from "../Types";
import { characterDetailsHandler } from "./characterDetailsHandler";


export async function getDetailedCharacter(character: any, setCharactersList: React.Dispatch<React.SetStateAction<string | CharacterTYPE[]>>) {
    axios.get(`https://swapi.py4e.com/api/people/?search=${character}`).then((response => {
        let characterHolder: CharacterTYPE[] = [];
        let charactersFullfiled: any = []
        response.data.results.forEach(async (character: CharacterTYPE) => characterHolder.push(character));


        let applyDetailsToCharacters = characterHolder.map(async (character: any) => {
            await characterDetailsHandler(character);
            return character;

        });

        charactersFullfiled = applyDetailsToCharacters;

        Promise.all(charactersFullfiled).then((response) => {
            setCharactersList(response);

            if (response.length === 0) {
                setCharactersList('Character not found');
            }
        })


    }))
}