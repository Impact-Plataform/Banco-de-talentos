import axios from "axios"

function getCharacter(url){
    return axios.get(url)
}

export default getCharacter