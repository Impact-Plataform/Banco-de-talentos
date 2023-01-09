import { Router } from "express";

import CurrencyController from "../controller/CurrencyController.js"


const router = new Router();

router.get('/currency/:currency', CurrencyController.findByCurrency)

export default router