import { NextFunction, Request, Response } from "express";
import { CurrencyCache } from "../../cache/CurrencyCache";
import { AppError } from "../../errors/AppError";

export class CurrencyValidation {
  static async handle(
    req: Request<{ symbol: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) {
    const { symbol } = req.params;
    try {
      const currency = await CurrencyCache.getCurrency();

      if (!currency[symbol.toUpperCase()])
        throw new AppError("Moeda não encontrada");

      next();
    } catch (error) {
      next(error);
    }
  }
}
