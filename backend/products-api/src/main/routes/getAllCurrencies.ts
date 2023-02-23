import { Router } from "express";
import { adaptGetCurrenciesRoute } from "../adapters/adaptGetCurrenciesRoute";
import { makeCurrencyController } from "../factories/makeCurrencyController";

export default (router: Router) => {
  router.get("/Currency", adaptGetCurrenciesRoute(makeCurrencyController()))
}