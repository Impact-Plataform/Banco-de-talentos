import ViaCurrencyClient from "../client/ViaCurrencyClient.js";

class CurrencyService{
   async findByCurrency(req){
          const { currency } = req.params;
          return await ViaCurrencyClient.findByCurrency(currency)
   }
}

export default new CurrencyService();