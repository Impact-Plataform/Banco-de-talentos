import { Product } from '@prisma/client';

declare global {
  namespace Express {
    export interface Request {
      product: Product
      selectedCurrencies: {
        firstCurrency: number | undefined,
        secondCurrency: number | undefined
      }
    }
  }
}