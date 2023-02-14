import { Request, Response } from "express";
import { HttpResponse } from "../../controllers/ports/httpResponse";
import { RequestHTTP } from "../../controllers/ports/requestHttp";
import { ProductController } from "../../controllers/ProductController";

export const adapteDeleteProductByNameRoute = (
  controller: ProductController
) => {
  return async (req: Request, res: Response) => {
    const idParam: string = req.params.id;
    const httpResponse: HttpResponse = await controller.deleteProduct(idParam);
    const { statusCode, body } = httpResponse;
    res.status(statusCode).json(body);
  };
};
