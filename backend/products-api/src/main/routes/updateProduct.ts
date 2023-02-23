import { Router } from "express";
import { adaptUpdateProductRoute } from "../adapters/adaptUpdateProductRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.put("/Products/:id", adaptUpdateProductRoute(makeProductController()));
};
