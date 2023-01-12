import { CharacterTYPE } from "../Types";

export async function filterData(characters: CharacterTYPE[], filterOptions: any, searchValue: string) {
    const filteredArray = characters.filter((person: any) => {  

        if (filterOptions.gender  && (person.gender.toLowerCase() !== filterOptions.gender.toLowerCase()) && filterOptions.gender !== 'all') {
            return false;
        }

        if (filterOptions.specie && ((!person.species.includes(filterOptions.specie)) && filterOptions.specie !== 'all')) {
            return false;
        }

        if (filterOptions.film  && (!person.films.includes(filterOptions.film)) && filterOptions.film !== 'all') {
            return false;
        }

        if (searchValue && (!person.name.toLowerCase().includes(searchValue.toLowerCase()))) {
            return false;
        }

        if (searchValue && (filterOptions.gender !== 'all' || filterOptions.specie !== 'all' || filterOptions.film !== 'all')  && (!person.name.toLowerCase().includes(searchValue.toLowerCase()))) {
            return false;
        }
    

        return true;
    });   

     return filteredArray.length === 0 ? 'Character not found' : filteredArray;
}