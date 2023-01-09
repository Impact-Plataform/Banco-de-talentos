import axios from 'axios';
import { Dispatch } from 'react';
import characterInfo from '../assets/MoreAboutCharacters/charactersInfo.json'
import { CharacterTYPE } from '../Types';
import { filterData } from './filterOptions';

export async function handleCharacters(pagNumber: number, setCharactersList: React.Dispatch<React.SetStateAction<any>>, filterOptions: any) {
    axios.get(`https://swapi.py4e.com/api/people/?page=${pagNumber}`)
        .then(async (response) => {

            let charactersArray: CharacterTYPE[] = [];

            response.data.results.forEach((character: CharacterTYPE) => charactersArray.push(character));
            
            // caso exista algum filtro ativo
            if (filterOptions.gender || filterOptions.specie || filterOptions.film) {
                let nextPage = response.data.next;
                // enquanto existir próxima página (enquanto next page não for null)
                while (nextPage) 
                {
                    //pegue a resposta
                    const res = await fetch(nextPage);
                    const { next, results } = await res.json();

                    // adicione ao array
                    results.forEach(async (result: CharacterTYPE) => {
                        charactersArray.push(result)
                    });
                    // passa para a próxima página
                    nextPage = next;
                }    
                promisesDealer(charactersArray, setCharactersList, filterOptions)
            } else {
                promisesDealer(charactersArray, setCharactersList, filterOptions)
            }
        });
}


async function promisesDealer(charactersList: CharacterTYPE[], setCharactersList: Dispatch<any>, filterOptions: CharacterTYPE) {

    let processedItems = 0;

    charactersList.forEach(async (character: any, index: number, array: any) => {
        let characterMoreInfo = characterInfo.find((item: any) => item.name === character.name)

        // Despacha o homeworld do personagem
        const homeworldResponse = await axios.get(character.homeworld);
        character.homeworld = homeworldResponse.data.name;

        //Recupera os filmes de todos os personagens
        const filmsPromises = character.films.map((film: any) => axios.get(film));
        //Despacha todos os filmes
        const filmsResponses = await Promise.all(filmsPromises);
        character.films = filmsResponses.map((response) => response.data.title);

        const speciesPromises = character.species.map((specie: any) => axios.get(specie));
        let speciesResponses: any = await Promise.all(speciesPromises);
        character.species = speciesResponses.map((response: any) => response.data.name);


        character.image = characterMoreInfo?.image;
        character.quote = characterMoreInfo?.quote;

        processedItems += 1;

        if (processedItems === array.length) {
            if (filterOptions.gender || !filterOptions.species || filterOptions.film)  {
                filterData(charactersList, filterOptions, setCharactersList);
            } else {
                setCharactersList(charactersList);
            }
        }

    });

}

export async function getTotalPages(setTotalPages: React.Dispatch<React.SetStateAction<any>>, totalPages: number) {
    let nextPage: any = 'https://swapi.py4e.com/api/people/';

    let pages: any = 0;

    while (nextPage) {
        const res = await fetch(nextPage)

        const { next, results } = await res.json()

        pages += 1;

        nextPage = next
    }


    setTotalPages(totalPages + pages);

}