import { Router } from "express";
import { GetAllCurrencyController, GetCurrencyController } from "../currency";
import { CurrencyValidation } from "../middleware/currency/currencyValidation";

const currencyRoutes = Router();
const getCurrency = new GetCurrencyController();
const getAllCurrency = new GetAllCurrencyController();

currencyRoutes
  .get("/", getAllCurrency.handle)
  .get("/:symbol", CurrencyValidation.handle, getCurrency.handle);

export default currencyRoutes;
