import { IRedisCache } from "../repositories/ports/IRedisCache";
import { UseCaseCurrency } from "../usecases/UseCaseCurrency";
import { HttpResponse } from "./ports/httpResponse";
import { clientError, ok } from "./utils/httpHelpers";

export class CurrencyController {
  constructor(private currencyUsecase: UseCaseCurrency, private cacheRepo: IRedisCache) {}

  async getCurrencies(): Promise<HttpResponse> {
    const cacheCurreny = await this.cacheRepo.get('currencies')
    if(cacheCurreny) {
      return ok(cacheCurreny)
    }

      this.currencyUsecase.deleteAll();
      
      await this.currencyUsecase.createDollar();
      await this.currencyUsecase.createEur();
      
      const getCurrencies = await this.currencyUsecase.getCurrencies();

      await this.cacheRepo.set('currencies', getCurrencies)

    return ok(getCurrencies);
  }

  async getACurrency(symbol: string):Promise<HttpResponse> {
    this.currencyUsecase.deleteAll();
    await this.currencyUsecase.createDollar();
    await this.currencyUsecase.createEur();
    
    const getCurrency = await this.currencyUsecase.getCurrency(symbol)
    
    return getCurrency ?
    ok(getCurrency) :
    clientError("Currency not found")
  }
}
