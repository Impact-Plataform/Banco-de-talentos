import { NextFunction, Request, Response } from "express";
import { CreateProductDTO } from "../../DTO/createProductDTO";
import { CreateProductUseCase } from "./createProductUseCase";

export class CreateProductController {
  async handle(
    req: Request<{}, {}, CreateProductDTO>,
    res: Response,
    next: NextFunction
  ) {
    const { title, description, price, category } = req.body;
    const createProduct = new CreateProductUseCase();

    const product = await createProduct.execute({
      title,
      description,
      price,
      category,
    });

    return res.status(201).json(product);
  }
}