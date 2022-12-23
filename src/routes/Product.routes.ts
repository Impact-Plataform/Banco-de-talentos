import { Router, Request, Response } from "express";
const productRoutes: Router = Router();

import ListProductController from "../app/controllers/Product/ListProductController";
const listProductController = new ListProductController();

productRoutes.get("/products", (req: Request, res: Response) => {
  listProductController.list(req, res);
});

export default productRoutes;
