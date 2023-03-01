import { Router } from "express";
import { adaptGetOneProductRoute } from "../adapters/adaptGetOneProductRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.get(
    "/Products/:id",
    adaptGetOneProductRoute(makeProductController())
  );
};
