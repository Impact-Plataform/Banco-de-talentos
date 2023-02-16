import { Router } from "express";
import { adapteGetOneProductRoute } from "../adapters/adapteGetOneProductRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.get(
    "/Products/:id",
    adapteGetOneProductRoute(makeProductController())
  );
};
