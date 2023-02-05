import { NextFunction, Request, Response } from "express";
import { GetCurrencyUseCase } from "./getCurrencyUseCase";

export class GetCurrencyController {
  async handle(
    req: Request<{ symbol: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) {
    const { symbol } = req.params;
    const getCurrency = new GetCurrencyUseCase();

    const currency = await getCurrency.execute(symbol.toUpperCase());

    return res.status(200).json(currency);
  }
}
