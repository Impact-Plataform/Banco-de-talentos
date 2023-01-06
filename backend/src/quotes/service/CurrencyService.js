import ViaCurrencyClient from "../client/ViaCurrencyClient.js";
import CacheServiceWrapper from "./WrapperService.js";

class CurrencyService {
  async findByCurrency(req) {
    const { currency } = req.params;
    if (await CacheServiceWrapper.exists(currency)) {
      return await CacheServiceWrapper.get(currency);
    }
    let response = await ViaCurrencyClient.findByCurrency(currency);
    await CacheServiceWrapper.save(currency, response);
    return response;
  }
}

export default new CurrencyService();



















/* import ViaCurrencyClient from "../client/ViaCurrencyClient.js";
import  CacheServiceWrapper  from "./CacheServiceWrapper.js";

class CurrencyService{
   async findByCurrency(req){
          const { currency } = req.params;
          if(await CacheServiceWrapper.exists(currency)){
            return await CacheServiceWrapper.get(currency)
          }
          let response = await ViaCurrencyClient.findByCurrency(currency)
          await CacheServiceWrapper.save(currency, response)
          return response;
   }
}

export default new CurrencyService(); */