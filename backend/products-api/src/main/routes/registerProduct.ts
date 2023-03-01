import { Router } from "express";
import { adaptCreateProductRoute } from "../adapters/adaptCreateProductsRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.post("/Products", adaptCreateProductRoute(makeProductController()));
};
