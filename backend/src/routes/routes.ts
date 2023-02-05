import { Router } from "express";
import { CurrencyValidation } from "../middleware/currency/currencyValidation";
import currencyRoutes from "./currencyRoute";
import productRoutes from "./productsRouter";
const routes = Router();

routes.use("/products", productRoutes).use("/currency", currencyRoutes);

export { routes };
