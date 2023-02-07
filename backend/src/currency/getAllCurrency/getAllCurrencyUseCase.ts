import { CurrencyCache } from "../../cache/CurrencyCache";

export class GetAllCurrencyUseCase {
  async execute() {
    const currency = await CurrencyCache.getCurrency();

    return currency;
  }
}
