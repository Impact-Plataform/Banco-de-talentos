import { NextFunction, Request, Response } from "express";
import { GetProductsUseCase } from "./GetProductsUseCase";

export class GetProductsController {
  async handle(req: Request, res: Response, next: NextFunction) {
    const getProducts = new GetProductsUseCase();
    const products = await getProducts.execute();

    return res.status(200).json(products);
  }
}
