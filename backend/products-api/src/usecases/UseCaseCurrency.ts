import { CurrencyProps } from "../entities/Currency";
import { ICurrencyRepository } from "../repositories/ports/ICurrencyRepository";
import { QuotationApi } from "../services/QuotationApi";

export class UseCaseCurrency {
  constructor(
    private repository: ICurrencyRepository,
    private quotationService: QuotationApi
  ) {}
  async create(currency: CurrencyProps) {
    this.repository.create(currency);
    return currency;
  }

  async createCurrencyBase(currencySymbol: string) {
    const getCurrencyInfo = await this.quotationService.getAPIQuotationInfo(
      `/${currencySymbol}-BRL`
    );
    const { code, codein, name, high } = getCurrencyInfo[currencySymbol];
    const currencyInfo = { code, codein, name, high };
    return await this.create(currencyInfo);
  }

  async createDollar() {
    return await this.createCurrencyBase("USD");
  }

  async createEur() {
    return await this.createCurrencyBase("EUR");
  }

  async getCurrency(symbol: string) {
    const findCurrency = await this.repository.findByCode(symbol);
    return findCurrency;
  }

  async deleteAll() {
    await this.repository.deleteAll();
  }
}
