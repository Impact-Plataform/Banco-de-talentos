import { ICurrency } from '../interfaces/currencyInterface';

declare global {
  namespace Express {
    export interface Request {
      currency: ICurrency
    }
  }
}