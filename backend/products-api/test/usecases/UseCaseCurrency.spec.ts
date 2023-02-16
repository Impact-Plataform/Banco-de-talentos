import { CurrencyProps } from "../../src/entities/Currency";
import { InMemoryCurrencyRepo } from "../../src/repositories/InMemoryCurrencyRepo";
import { UseCaseCurrency } from "../../src/usecases/UseCaseCurrency";

describe("Use case currency", () => {
  const currencyProps: CurrencyProps = {
    code: "USD",
    codeIn: "BRL",
    name: "Dólar Americano/Real Brasileiro",
    high: "5",
  };

  test("can create a currency", async () => {
    const currencyList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currencyList);
    const currencyUsecase = new UseCaseCurrency(repository);

    const createCurrency = await currencyUsecase.create(currencyProps);
    expect(currencyList[0]).toEqual(currencyProps);
  });
});
