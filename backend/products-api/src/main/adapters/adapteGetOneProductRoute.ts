import { Request, Response } from "express";
import { HttpResponse } from "../../controllers/ports/httpResponse";
import { ProductController } from "../../controllers/ProductController";

export const adapteGetOneProductRoute = (controller: ProductController) => {
  return async (req: Request, res: Response) => {
    const { id } = req.params;

    const updateProduct = await controller.getProductById(id);
    const { statusCode, body } = updateProduct;
    res.status(statusCode).json(body);
  };
};
