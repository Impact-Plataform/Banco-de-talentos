import axios from "axios";
import { VIA_CURRENCY_URL } from '../../config/secrets.js'


class viaCurrencyClient{
  async findByCurrency(currency){
    let response = {}
   console.info(`Buscando dados da API...`)

   await axios.get(VIA_CURRENCY_URL(currency))
   .then((res) => {
     let apiResponse = res.data;
     console.log(`Retornando dados da API referentes a ${currency}: ${JSON.stringify(apiResponse)}`)
    })
   .catch((err) => {
     console.error(`Erro ao chamar a API`)
     console.error(err)
   })
   return response
    }
}


export default new viaCurrencyClient();

