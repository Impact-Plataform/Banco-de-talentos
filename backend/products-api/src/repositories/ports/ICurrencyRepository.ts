import { CurrencyProps } from "../../entities/Currency";

export interface ICurrencyRepository {
  create(currency: CurrencyProps): Promise<void>;
  findByCode(code: string): Promise<any>;
  getAll(): Promise<any>;
}
