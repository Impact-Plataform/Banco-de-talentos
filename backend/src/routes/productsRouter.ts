import { Router } from "express";
import { ProductsValidation } from "../middleware/products/ProductValidation";
import {
  CreateProductController,
  DeleteProductController,
  UpdateProductController,
} from "../products";

const productRoutes = Router();
const createProduct = new CreateProductController();
const updateProduct = new UpdateProductController();
const deleteProduct = new DeleteProductController();

productRoutes
  .post("/", ProductsValidation.handleCreate, createProduct.handle)
  .put("/:id", ProductsValidation.handleUpdate, updateProduct.handle)
  .delete("/:id", ProductsValidation.handleDelete, deleteProduct.handle);

export default productRoutes;
