const {
	getCurrencies,
	getSpecificCurrency
} = require('../controllers/CurrencyController');
const { Router } = require('express');
const router = Router();

router
	.get('/Currency', getCurrencies)
	.get('/Currency/:symbol', getSpecificCurrency);

module.exports = router;
