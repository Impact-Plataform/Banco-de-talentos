import { Router, Request, Response, NextFunction } from "express";
const productRoutes: Router = Router();

import ListProductController from "../app/controllers/Product/ListProductController";
const listProductController = new ListProductController();

import CreateProductController from "../app/controllers/Product/CreateProductController";
const createProductController = new CreateProductController();

import UpdateProductController from "../app/controllers/Product/UpdateProductController";
const updateProductController = new UpdateProductController();

import DeleteProductController from "../app/controllers/Product/DeleteProductController";
const deleteProductController = new DeleteProductController();

import ShowProductController from "../app/controllers/Product/ShowProductController";
const showProductController = new ShowProductController();

import productValidator from "../middlewares/productValidator";

productRoutes.get("/products", (req: Request, res: Response) => {
  listProductController.list(req, res);
});

productRoutes.get("/products/:id", (req: Request, res: Response) => {
  showProductController.show(req, res);
});

productRoutes.delete("/products/:id", (req: Request, res: Response) => {
  deleteProductController.delete(req, res);
});

// productRoutes.use((req: Request, res: Response, next: NextFunction) =>
//   productValidator(req, res, next)
// );

productRoutes.post(
  "/products",
  (req: Request, res: Response, next: NextFunction) => {
    productValidator(req, res, next);
  },
  (req: Request, res: Response, next: NextFunction) => {
    createProductController.create(req, res);
  }
);

productRoutes.put(
  "/products/:id",
  (req: Request, res: Response, next: NextFunction) => {
    productValidator(req, res, next);
  },
  (req: Request, res: Response, next: NextFunction) => {
    updateProductController.update(req, res);
  }
);

export default productRoutes;
