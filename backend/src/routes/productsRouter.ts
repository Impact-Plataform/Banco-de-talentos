import { Router } from "express";
import { CreateProductController } from "../products";

const productRoutes = Router();
const createProduct = new CreateProductController();

productRoutes.post("/", createProduct.handle);

export default productRoutes;
