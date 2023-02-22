import { CurrencyController } from "../../src/controllers/CurrencyController";
import { CurrencyProps } from "../../src/entities/Currency";
import { InMemoryCurrencyRepo } from "../../src/repositories/inMemory/InMemoryCurrencyRepo";
import { QuotationApi } from "../../src/services/QuotationApi";
import { UseCaseCurrency } from "../../src/usecases/UseCaseCurrency";

describe("Currency controller", () => {
  test("should get all currencies", async () => {
    const currenciesList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currenciesList);
    const service = new QuotationApi();
    const usecaseCurrency = new UseCaseCurrency(repository, service);
    const currencyController = new CurrencyController(usecaseCurrency);
    const allCurrencies = await currencyController.getCurrencies();
    expect(allCurrencies.body.currencies).toBeTruthy();
  });
});
