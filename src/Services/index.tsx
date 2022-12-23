import axios from 'axios';

export async function getCharacters(pagNumber : number, setCharactersList: React.Dispatch<React.SetStateAction<any>>) {
    axios.get(`https://swapi.dev/api/people/?page=${pagNumber}`).then((response) => {
        setCharactersList(response.data.results);
    }).catch((err) => {
        console.log(err);
    })
}