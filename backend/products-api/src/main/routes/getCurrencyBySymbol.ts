import { Router } from "express";
import { adaptGetCurrencyBySymbolRoute } from "../adapters/adaptGetCurrencyBySymbolRoute.spec";
import { makeCurrencyController } from "../factories/makeCurrencyController";

export default (router: Router) => {
    router.get("/Currency/:symbol", adaptGetCurrencyBySymbolRoute(makeCurrencyController()))
}