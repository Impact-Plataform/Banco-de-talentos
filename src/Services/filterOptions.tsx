export async function filterData(characters: any, filterOptions: any, searchValue: string) {
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
        //Adicionar condição de verificação
        // if (searchValue === ''){
        //     //Filtra dados com base nas opções de filtro escolhidas
        //     return filterOptions.gender === 'all' && filterOptions.specie === 'all' && filterOptions.film === 'all';
        // } 

        if (searchValue && (!person.name.toLowerCase().includes(searchValue.toLowerCase()))) {
            return false;
        }

        if (searchValue && (filterOptions.gender !== 'all' || filterOptions.specie !== 'all' || filterOptions.film !== 'all')  && (!person.name.toLowerCase().includes(searchValue.toLowerCase()))) {
            return false;
        }
    

        return true;
    });   

      return filteredArray;

}