import { Router } from "express";
import { adapteGetCurrenciesRoute } from "../adapters/adapteGetCurrenciesRoute";
import { makeCurrencyController } from "../factories/makeCurrencyController";

export default (router: Router) => {
  router.get("/Currency", adapteGetCurrenciesRoute(makeCurrencyController()))
}