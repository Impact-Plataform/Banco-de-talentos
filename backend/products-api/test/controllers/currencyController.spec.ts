import { CurrencyController } from "../../src/controllers/CurrencyController";
import { CurrencyProps } from "../../src/entities/Currency";
import { InMemoryCurrencyRepo } from "../../src/repositories/inMemory/InMemoryCurrencyRepo";
import { client } from "../../src/repositories/redis/client/redisClient";
import { RedisCache } from "../../src/repositories/redis/RedisCache";
import { QuotationApi } from "../../src/services/QuotationApi";
import { UseCaseCurrency } from "../../src/usecases/UseCaseCurrency";

describe("Currency controller", () => {
  beforeAll(() => client.connect())
  test("should get all currencies", async () => {
    const currenciesList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currenciesList);
    const service = new QuotationApi();
    const usecaseCurrency = new UseCaseCurrency(repository, service);
    const redis = new RedisCache()
    const currencyController = new CurrencyController(usecaseCurrency, redis);
    const allCurrencies = await currencyController.getCurrencies();
    expect(allCurrencies.body.currencies).toBeTruthy();
  });

  test("should get currency by symbol", async () => {
    const currenciesList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currenciesList);
    const service = new QuotationApi();
    const usecaseCurrency = new UseCaseCurrency(repository, service);
    const redis = new RedisCache()
    const currencyController = new CurrencyController(usecaseCurrency, redis);
    const getDollar = await currencyController.getACurrency("USD")

    expect(getDollar.body.code).toBe("USD")
  })
  test("should return status 400 if try to get an unexisting currency", async () => {
    const currenciesList: CurrencyProps[] = [];
    const repository = new InMemoryCurrencyRepo(currenciesList);
    const service = new QuotationApi();
    const usecaseCurrency = new UseCaseCurrency(repository, service);
    const redis = new RedisCache()
    const currencyController = new CurrencyController(usecaseCurrency, redis);
    const getDollar = await currencyController.getACurrency("USDS")

    expect(getDollar.statusCode).toBe(400)
  })
});
