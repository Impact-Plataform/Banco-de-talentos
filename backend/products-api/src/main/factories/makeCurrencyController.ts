import { CurrencyController } from "../../controllers/CurrencyController";
import { CurrencyProps } from "../../entities/Currency";
import { InMemoryCurrencyRepo } from "../../repositories/inMemory/InMemoryCurrencyRepo";
import { RedisCache } from "../../repositories/redis/RedisCache";
import { QuotationApi } from "../../services/QuotationApi";
import { UseCaseCurrency } from "../../usecases/UseCaseCurrency";

export const makeCurrencyController = () => {
  const list: CurrencyProps[] = [];
  const repositorie = new InMemoryCurrencyRepo(list);
  const service = new QuotationApi();
  const useCase = new UseCaseCurrency(repositorie, service);
  const redis = new RedisCache()
  const controller = new CurrencyController(useCase, redis);
  return controller;
};
