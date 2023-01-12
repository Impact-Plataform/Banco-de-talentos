import { Product } from '@prisma/client';
import { ICurrency } from '../interfaces/currencyInterface';

declare global {
  namespace Express {
    export interface Request {
      product: Product
      selectedCurrencies: {
        firstCurrency: number | undefined,
        secondCurrency: number | undefined
      }
      currency: ICurrency
    }
  }
}