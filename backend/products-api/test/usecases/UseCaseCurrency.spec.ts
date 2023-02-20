import { CurrencyProps } from "../../src/entities/Currency";
import { InMemoryCurrencyRepo } from "../../src/repositories/InMemoryCurrencyRepo";
import { QuotationApi } from "../../src/services/QuotationApi";
import { UseCaseCurrency } from "../../src/usecases/UseCaseCurrency";

describe("Use case currency", () => {
  const currencyProps: CurrencyProps = {
    code: "USD",
    codein: "BRL",
    name: "Dólar Americano/Real Brasileiro",
    high: "5",
  };

  test("can create a currency", async () => {
    const currencyList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currencyList);
    const service = new QuotationApi();
    const currencyUsecase = new UseCaseCurrency(repository, service);

    const createCurrency = await currencyUsecase.create(currencyProps);
    expect(createCurrency).toEqual(currencyProps);
  });

  test("Should create a currency getting dollar informations from quotation api", async () => {
    const currencyList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currencyList);
    const service = new QuotationApi();
    const currencyUsecase = new UseCaseCurrency(repository, service);
    const usd = await currencyUsecase.createDollar();
    expect(usd).toBeTruthy();
  });

  test("should find currency by code USD", async () => {
    const currencyList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currencyList);
    const service = new QuotationApi();
    const currencyUsecase = new UseCaseCurrency(repository, service);
    const usd = await currencyUsecase.createDollar();
    const findUsd = await currencyUsecase.getCurrency("USD");
    expect(findUsd).toBeTruthy();
  });

  test("should find currency by code EUR", async () => {
    const currencyList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currencyList);
    const service = new QuotationApi();
    const currencyUsecase = new UseCaseCurrency(repository, service);
    const usd = await currencyUsecase.createEur();
    const findUsd = await currencyUsecase.getCurrency("EUR");
    expect(findUsd).toBeTruthy();
  });

  test("should delete all", async () => {
    const currencyList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currencyList);
    const service = new QuotationApi();
    const currencyUsecase = new UseCaseCurrency(repository, service);
    const createCurrency = await currencyUsecase.create(currencyProps);

    const deleteAll = await currencyUsecase.deleteAll();
    expect(currencyList.length).toBe(0);
  });
});
