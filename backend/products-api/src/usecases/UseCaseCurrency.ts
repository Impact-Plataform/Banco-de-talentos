import { CurrencyProps } from "../entities/Currency";
import { ICurrencyRepository } from "../repositories/ports/ICurrencyRepository";

export class UseCaseCurrency {
  constructor(private repository: ICurrencyRepository) {}
  async create(currency: CurrencyProps) {
    this.repository.create(currency);
  }
}
