import { Request, Response } from "express";
import { HttpResponse } from "../../controllers/ports/httpResponse";
import { RequestHTTP } from "../../controllers/ports/requestHttp";
import { ProductController } from "../../controllers/ProductController";

export const adaptRoute = (controller: ProductController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: RequestHTTP = {
      body: req.body,
    };

    const httpResponse: HttpResponse = await controller.create(httpRequest);
    const { statusCode, body } = httpResponse;
    res.status(statusCode).json(body);
  };
};
