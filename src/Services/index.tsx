import axios from 'axios';
import { CharacterTYPE, FilterOptions } from '../Types';
import { characterDetailsHandler } from './characterDetailsHandler';
import { filterCharacter } from './filterOptions';

export async function handleCharacters(pagNumber: number, filterOptions: FilterOptions, characterArray: CharacterTYPE[], searchValue: string) {
    let count = 1;

    if (filterOptions.gender || filterOptions.species || filterOptions.film || searchValue.length > 0) {
        const allCharacters = await axios.get(`https://swapi.py4e.com/api/people/?page=${count}`);
        allCharacters.data.results.forEach((character: CharacterTYPE) => characterArray.push(character))

        let nextPage = allCharacters.data.next;

        while (nextPage) {

            const res = await fetch(nextPage);
            const { next, results } = await res.json();
            count++;

            results.forEach(async (result: CharacterTYPE) => {
                characterArray.push(result)
            });

            nextPage = next;

        }
    } else {
        const response = await axios.get(`https://swapi.py4e.com/api/people/?page=${pagNumber}`);
        response.data.results.forEach((character: CharacterTYPE) => characterArray.push(character));
    }

}

export async function promisesDealer(charactersList: CharacterTYPE[], setCharactersList: React.Dispatch<React.SetStateAction<string | CharacterTYPE[]>>, filterOptions: FilterOptions, searchValue: string) {
    let processedItems: number = 0

    charactersList.forEach(async (character: CharacterTYPE, index: number, array: CharacterTYPE[]) => {
        await characterDetailsHandler(character);

        processedItems++;

        if (processedItems === array.length) {
                let item = await filterCharacter(charactersList, filterOptions, searchValue)
                Promise.resolve(item).then((response) => {
                    setCharactersList(response);
                })

            }
        }

    )
}

export async function getTotalPages(setTotalPages: React.Dispatch<React.SetStateAction<number>>, totalPages: number) {
    let nextPage: any = 'https://swapi.py4e.com/api/people/';

    let pages: any = 0;

    while (nextPage) {
        const res = await fetch(nextPage)

        const { next } = await res.json()

        pages += 1;

        nextPage = next
    }


    setTotalPages(totalPages + pages);

}
