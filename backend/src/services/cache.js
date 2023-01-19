import axios from "axios";
import NodeCache from "node-cache";

const cacheAPI = new NodeCache({ stdTTL: 5000 })

const url = 'https://economia.awesomeapi.com.br/all'

export const getAPI = async () => {
    const response = await axios.get(`${url}`)
    return response.data
}
        
export const getCurrency = async () => {
    const data = cacheAPI.get('responseAPI')
        if (!data) {
            const responseAPI = await getAPI()
            cacheAPI.set('responseAPI', responseAPI)
            return responseAPI
        }
    return data
}
        
export const prices = await getCurrency()

