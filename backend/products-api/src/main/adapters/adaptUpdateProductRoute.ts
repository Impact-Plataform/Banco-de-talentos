import { Request, Response } from "express";
import { RequestHTTP } from "../../controllers/ports/requestHttp";
import { ProductController } from "../../controllers/ProductController";

export const adaptUpdateProductRoute = (controller: ProductController) => {
  return async (req: Request, res: Response) => {
    const request: RequestHTTP = {
      body: req.body,
    };
    const id = req.params.id;

    const updateProduct = await controller.updateProduct(request, id);
    const { statusCode, body } = updateProduct;
    res.status(statusCode);
    res.json(body);
  };
};
