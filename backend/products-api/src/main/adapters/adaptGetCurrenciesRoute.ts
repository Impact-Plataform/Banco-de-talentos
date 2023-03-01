import { Request, Response } from "express";
import { CurrencyController } from "../../controllers/CurrencyController";

export const adaptGetCurrenciesRoute = (controller: CurrencyController) => {
  return async (req: Request, res: Response) => {
    const allProducts = await controller.getCurrencies();
    const { statusCode, body } = allProducts;
    res.status(statusCode).json(body);
  };
};
