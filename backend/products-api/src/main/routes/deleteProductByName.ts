import { Router } from "express";
import { adapteDeleteProductByNameRoute } from "../adapters/adaptDeleteProductByNameRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.delete("/Products", adapteDeleteProductByNameRoute(makeProductController()))
};
