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

export async function promisesDealer(charactersList: CharacterTYPE[], setCharactersList: any, filterOptions: FilterOptions, searchValue: string) {

    const itemMap = charactersList.map(async (character: CharacterTYPE) => {
        await characterDetailsHandler(character);
        return character;
        
    })


    Promise.all(itemMap).then(async(response) => {
        let item:CharacterTYPE[] | string =  await filterCharacter(response, filterOptions, searchValue)
        setCharactersList(item);
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
