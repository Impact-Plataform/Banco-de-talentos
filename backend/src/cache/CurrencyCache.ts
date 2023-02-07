import NodeCache from "node-cache";
import { CurrencyServices, ICurrency } from "../services/currencyServices";

const cache = new NodeCache({ stdTTL: 60 });

export class CurrencyCache {
  static async getCurrency() {
    const currency = cache.get<ICurrency>("currency");

    if (currency === undefined) {
      console.log("Get currency from API");

      const FetchedCurrency = await CurrencyServices.get();
      cache.set("currency", FetchedCurrency);
      return FetchedCurrency;
    }

    return currency;
  }
}
