import { CurrencyController } from "../../controllers/CurrencyController";
import { CurrencyProps } from "../../entities/Currency";
import { InMemoryCurrencyRepo } from "../../repositories/InMemoryCurrencyRepo";
import { QuotationApi } from "../../services/QuotationApi";
import { UseCaseCurrency } from "../../usecases/UseCaseCurrency";

export const makeCurrencyController = () => {
  const list: CurrencyProps[] = [];
  const repositorie = new InMemoryCurrencyRepo(list);
  const service = new QuotationApi();
  const useCase = new UseCaseCurrency(repositorie, service);
  const controller = new CurrencyController(useCase);
  return controller;
};
