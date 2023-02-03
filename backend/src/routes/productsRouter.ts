import { Router } from "express";
import { ProductsValidation } from "../middleware/products/ProductValidation";
import { CreateProductController, UpdateProductController } from "../products";

const productRoutes = Router();
const createProduct = new CreateProductController();
const updateProduct = new UpdateProductController();

productRoutes
  .post("/", ProductsValidation.handleCreate, createProduct.handle)
  .put("/:id", ProductsValidation.handleUpdate, updateProduct.handle);

export default productRoutes;
