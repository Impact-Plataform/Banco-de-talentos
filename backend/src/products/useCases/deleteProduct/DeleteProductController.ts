import { NextFunction, Request, Response } from "express";
import { DeleteProductUseCase } from "./DeleteProductUseCase";

export class DeleteProductController {
  async handle(
    req: Request<{ id: string }, {}, {}>,
    res: Response,
    next: NextFunction
  ) {
    const id = Number(req.params.id);
    const deleteProduct = new DeleteProductUseCase();

    await deleteProduct.execute(id);

    return res.status(204).send();
  }
}
