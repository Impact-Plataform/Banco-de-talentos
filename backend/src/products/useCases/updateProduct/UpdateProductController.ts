import { NextFunction, Request, Response } from "express";
import { UpdateProductDTO } from "../../DTO/updateProductDTO";
import { UpdateProductUseCase } from "./UpdateProductUseCase";

export class UpdateProductController {
  async handle(
    req: Request<{ id: string }, {}, UpdateProductDTO>,
    res: Response,
    next: NextFunction
  ) {
    const { title, description, category, price } = req.body;
    const id = Number(req.params.id);
    const updateProduct = new UpdateProductUseCase();

    const product = await updateProduct.execute({
      id,
      title,
      description,
      category,
      price,
    });

    return res.status(200).json(product);
  }
}
