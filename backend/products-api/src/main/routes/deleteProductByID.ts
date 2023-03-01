import { Router } from "express";
import { adaptDeleteProductByNameRoute } from "../adapters/adaptDeleteProductByIDRoute";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.delete("/Products/:id", adaptDeleteProductByNameRoute(makeProductController()))
};
