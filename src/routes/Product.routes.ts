import { Router, Request, Response, NextFunction } from "express";
const productRoutes: Router = Router();

import ListProductController from "../app/controllers/Product/ListProductController";
const listProductController = new ListProductController();

import CreateProductController from "../app/controllers/Product/CreateProductController";
const createProductController = new CreateProductController();

import productValidator from "../middlewares/productValidator";

productRoutes.get("/products", (req: Request, res: Response) => {
  listProductController.list(req, res);
});

productRoutes.use((req: Request, res: Response, next: NextFunction) =>
  productValidator(req, res, next)
);
productRoutes.post("/products", (req: Request, res: Response) => {
  createProductController.create(req, res);
});

export default productRoutes;
