export async function filterData(characters: any, filterOptions: any, setCharactersList: React.Dispatch<React.SetStateAction<any>>) {
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
        return true;
    });   

        if (filteredArray.length === 0) {
            setCharactersList("Character Not Found")
        } else {
            setTimeout(() => {
                setCharactersList(filteredArray);
            }, 1400)
        }

}