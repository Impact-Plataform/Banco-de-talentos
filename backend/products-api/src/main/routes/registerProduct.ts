import { Router } from "express";
import { adaptCreateProductRoute } from "../adapters/expressRouteAdapter";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.post("/Products", adaptCreateProductRoute(makeProductController()));
};
