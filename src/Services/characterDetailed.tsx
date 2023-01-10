import axios from "axios";
import { CharacterTYPE } from "../Types";
import { characterDetailsHandler } from "./characterDetailsHandler";
import { filterData } from "./filterOptions";


export async function getDetailedCharacter(character: any, setCharactersList: any, filterOptions: any, searchValue: any) {
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
            let item: any = filterData(response, filterOptions, searchValue)
            if (searchValue.length > 0) {
                Promise.resolve(item).then((response) => {
                    if (response.length === 0) {
                        setCharactersList('Character not found');
                    } else {
                        setCharactersList(response)

                    }
                })

            }
        })
    }))
}
