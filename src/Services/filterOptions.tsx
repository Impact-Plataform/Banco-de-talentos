import { CharacterTYPE, FilterOptions } from "../Types";
import { characterDetailsHandler } from "./characterDetailsHandler";

export async function filterCharacter(characters: CharacterTYPE[], filterOptions: FilterOptions, searchValue: string) {
    const filteredArray = characters.filter((person: any) => {  

        if (filterOptions.gender  && (person.gender.toLowerCase() !== filterOptions.gender.toLowerCase()) && filterOptions.gender !== 'all') {
            return false;
        }

        if (filterOptions.species && ((!person.species.includes(filterOptions.species)) && filterOptions.species !== 'all')) {
            return false;
        }

        if (filterOptions.film  && (!person.films.includes(filterOptions.film)) && filterOptions.film !== 'all') {
            return false;
        }

        if (searchValue && (!person.name.toLowerCase().includes(searchValue.toLowerCase()))) {
            return false;
        }

        if (searchValue && (filterOptions.gender !== 'all' || filterOptions.species !== 'all' || filterOptions.film !== 'all')  && (!person.name.toLowerCase().includes(searchValue.toLowerCase()))) {
            return false;
        }
    

        return true;
    });   

     return filteredArray.length === 0 ? 'Character not found' : filteredArray;
}



