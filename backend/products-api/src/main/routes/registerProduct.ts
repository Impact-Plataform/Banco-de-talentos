import { Router } from "express";
import { adaptRoute } from "../adapters/expressRouteAdapter";
import { makeProductController } from "../factories/makeProductController";

export default (router: Router) => {
  router.post("/Products", adaptRoute(makeProductController()));
};
