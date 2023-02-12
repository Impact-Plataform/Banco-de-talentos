import { Router } from "express";
import { adaptGetProductsRoute } from "../adapters/adaptGetProductsRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.get("/Products", adaptGetProductsRoute(makeProductController()));
};
