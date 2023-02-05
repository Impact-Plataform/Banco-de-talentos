import { CurrencyCache } from "../../cache/CurrencyCache";

export class GetCurrencyUseCase {
  async execute(symbol: string) {
    const currency = await CurrencyCache.getCurrency();

    return currency[symbol];
  }
}
