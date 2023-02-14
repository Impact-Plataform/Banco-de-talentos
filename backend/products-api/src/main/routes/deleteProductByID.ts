import { Router } from "express";
import { adapteDeleteProductByNameRoute } from "../adapters/adaptDeleteProductByIDRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.delete("/Products/:id", adapteDeleteProductByNameRoute(makeProductController()))
};
