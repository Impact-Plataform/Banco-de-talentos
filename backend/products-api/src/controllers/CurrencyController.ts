import { UseCaseCurrency } from "../usecases/UseCaseCurrency";
import { HttpResponse } from "./ports/httpResponse";
import { clientError, ok } from "./utils/httpHelpers";

export class CurrencyController {
  constructor(private currencyUsecase: UseCaseCurrency) {}

  async getCurrencies(): Promise<HttpResponse> {
    this.currencyUsecase.deleteAll();
    await this.currencyUsecase.createDollar();
    await this.currencyUsecase.createEur();
    const getCurrencies = await this.currencyUsecase.getCurrencies();
    return ok(getCurrencies);
  }
}
