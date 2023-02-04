import { NextFunction, Request, Response } from "express";
import { GetProductUseCase } from "./GetProductUseCase";

export class GetProductController {
  async handle(
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) {
    const id = Number(req.params.id);
    const getProduct = new GetProductUseCase();
    const product = await getProduct.execute(id);

    return res.status(200).json(product);
  }
}
