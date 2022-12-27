import axios from "axios"

async function getQuotation(url){
    const response = await axios.get(url)
    return response.data
}

export default getQuotation