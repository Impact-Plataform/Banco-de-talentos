import axios from 'axios';
import { CharacterTYPE } from '../Types';
import { characterDetailsHandler } from './characterDetailsHandler';
import { filterData } from './filterOptions';

export async function handleCharacters(pagNumber: number, filterOptions: any, characterArray: CharacterTYPE[], searchValue: string) {
    const response = await axios.get(`https://swapi.py4e.com/api/people/?page=${pagNumber}`);

    response.data.results.forEach((character: CharacterTYPE) => characterArray.push(character));

    if (filterOptions.gender || filterOptions.specie || filterOptions.film || searchValue.length > 0) {
        let nextPage = response.data.next;
        while (nextPage) {

            const res = await fetch(nextPage);
            const { next, results } = await res.json();

            results.forEach(async (result: CharacterTYPE) => {
                characterArray.push(result)
            });
            nextPage = next;
        }
        return characterArray;
    } else {
        return characterArray;
    }

}

export async function promisesDealer(charactersList: CharacterTYPE[], setCharactersList: React.Dispatch<React.SetStateAction<string | CharacterTYPE[]>>, filterOptions: any, searchValue: string) {
    let processedItems: number = 0

    charactersList.forEach(async (character: CharacterTYPE, index: number, array: any) => {
        await characterDetailsHandler(character);

        processedItems++;

        if (processedItems === array.length) {
            if (filterOptions.gender || !filterOptions.species || filterOptions.film) {
                let item = await filterData(charactersList, filterOptions, searchValue)
                Promise.resolve(item).then((response) => {
                    console.log(response)
                    if(response.length === 0 ) {}
                    setCharactersList(response);
                })

            }
        }

    })
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
