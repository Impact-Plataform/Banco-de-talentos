import { CurrencyProps } from '../entities/Currency';
import {ICurrencyRepository} from './ports/ICurrencyRepository' 

export class InMemoryCurrencyRepo implements ICurrencyRepository {
  constructor(private currencies: CurrencyProps[]) {}

  async create(currency: CurrencyProps): Promise<void> {
    this.currencies.push(currency);
  }
  async findByCode(code: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async getAll(): Promise<any> {
    throw new Error("Method not implemented.");
  }
   getOne(code: string): Promise<any> {
    throw new Error("Method not implemented.");
  }
}