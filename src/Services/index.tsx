import axios from 'axios';
import { Dispatch } from 'react';
import { CharacterTYPE } from '../Types';
import { characterDetailsHandler } from './characterDetailsHandler';
import { filterData } from './filterOptions';

export async function handleCharacters(pagNumber: number, setCharactersList: React.Dispatch<React.SetStateAction<any>>, filterOptions: any) {
    axios.get(`https://swapi.py4e.com/api/people/?page=${pagNumber}`)
        .then(async (response) => {

            let charactersArray: CharacterTYPE[] = [];

            response.data.results.forEach((character: CharacterTYPE) => charactersArray.push(character));

            if (filterOptions.gender || filterOptions.specie || filterOptions.film) {
                let nextPage = response.data.next;
                while (nextPage) {

                    const res = await fetch(nextPage);
                    const { next, results } = await res.json();

                    results.forEach(async (result: CharacterTYPE) => {
                        charactersArray.push(result)
                    });
                    nextPage = next;
                }
                promisesDealer(charactersArray, setCharactersList, filterOptions)
            } else {
                promisesDealer(charactersArray, setCharactersList, filterOptions)
            }
        });
}


async function promisesDealer(charactersList: CharacterTYPE[], setCharactersList: Dispatch<CharacterTYPE[]>, filterOptions: CharacterTYPE) {

    characterDetailsHandler(charactersList);

    if (filterOptions.gender || !filterOptions.species || filterOptions.film) {
        setTimeout(() => {
            filterData(charactersList, filterOptions, setCharactersList)
        }, 1000)
    } else {
        setTimeout(() => {
            setCharactersList(charactersList);
        }, 1000)
    }
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
