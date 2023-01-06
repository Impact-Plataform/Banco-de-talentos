import { Router } from "express";

import CurrencyController from "../controller/CurrencyController.js"

const router = new Router();

router.get('/api/v1/currency/:currency', CurrencyController.findByCurrency)

export default router