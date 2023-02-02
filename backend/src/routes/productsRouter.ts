import { Router } from "express";
import { ProductsValidation } from "../middleware/products/ProductValidation";
import { CreateProductController, UpdateProductController } from "../products";

const productRoutes = Router();
const createProduct = new CreateProductController();
const updateProduct = new UpdateProductController();

productRoutes
  .post("/", ProductsValidation.handle, createProduct.handle)
  .put("/:id", updateProduct.handle);

export default productRoutes;
