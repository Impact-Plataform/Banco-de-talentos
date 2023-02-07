import { Router } from "express";
import { ProductsValidation } from "../middleware/products/ProductValidation";
import {
  CreateProductController,
  DeleteProductController,
  UpdateProductController,
  GetProductController,
  GetProductsController,
} from "../products";

const productRoutes = Router();
const createProduct = new CreateProductController();
const updateProduct = new UpdateProductController();
const deleteProduct = new DeleteProductController();
const getProduct = new GetProductController();
const getProducts = new GetProductsController();

productRoutes
  .post("/", ProductsValidation.handleCreate, createProduct.handle)
  .get("/", getProducts.handle)
  .get("/:id", ProductsValidation.handleGet, getProduct.handle)
  .put("/:id", ProductsValidation.handleUpdate, updateProduct.handle)
  .delete("/:id", ProductsValidation.handleDelete, deleteProduct.handle);

export default productRoutes;
