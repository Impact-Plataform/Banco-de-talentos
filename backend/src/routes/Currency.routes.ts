import { Router, Request, Response } from "express";
const currencyRoutes: Router = Router();

import ListCurrencyController from "../app/controllers/Currency/ListCurrencyController";
const listCurrencyController = new ListCurrencyController();

import ShowCurrencyController from "../app/controllers/Currency/ShowCurrencyController";
const showCurrencyController = new ShowCurrencyController();

currencyRoutes.get("/currency", (req: Request, res: Response) => {
  listCurrencyController.list(req, res);
});

currencyRoutes.get("/currency/:symbol", (req: Request, res: Response) => {
  showCurrencyController.show(req, res);
});

export default currencyRoutes;
