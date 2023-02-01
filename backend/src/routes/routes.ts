import { Router } from "express";
import productRoutes from "./productsRouter";
const routes = Router();

routes.use("/products", productRoutes);

export { routes };
