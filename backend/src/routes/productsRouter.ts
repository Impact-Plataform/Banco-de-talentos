import { Router } from "express";
import { ProductsValidation } from "../middleware/products/ProductValidation";
import { CreateProductController } from "../products";

const productRoutes = Router();
const createProduct = new CreateProductController();

productRoutes.post("/", ProductsValidation.handle, createProduct.handle);

export default productRoutes;
