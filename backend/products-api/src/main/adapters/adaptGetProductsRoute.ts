import { Request, Response } from "express";
import { HttpResponse } from "../../controllers/ports/httpResponse";
import { ProductController } from "../../controllers/ProductController";

export const adaptGetProductsRoute = (controller: ProductController) => {
  return async (req: Request, res: Response) => {
    const httpResponse: HttpResponse = await controller.getProducts();
    const { statusCode, body } = httpResponse;
    res.status(statusCode).json(body);
  };
};
