import { NextFunction, Request, Response } from "express";
import { GetAllCurrencyUseCase } from "./getAllCurrencyUseCase";

export class GetAllCurrencyController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const getAllCurrency = new GetAllCurrencyUseCase();
    const allCurrency = await getAllCurrency.execute();

    return res.status(200).json({ currency: allCurrency });
  }
}
