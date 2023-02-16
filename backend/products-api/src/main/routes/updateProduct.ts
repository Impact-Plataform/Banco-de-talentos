import { Router } from "express";
import { adapteUpdateProductRoute } from "../adapters/adapteUpdateProductRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.put("/Products/:id", adapteUpdateProductRoute(makeProductController()));
};
