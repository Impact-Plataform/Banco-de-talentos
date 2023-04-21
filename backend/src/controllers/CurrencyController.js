const { getCurrencyData } = require('../utility/cache');

class CurrencyController {
	// @desc   Return all currencies
	// @route  GET /Currency
	static async getCurrencies(_, res) {
		const data = await getCurrencyData();
		try {
			res.status(200).send(data);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	// @desc   Return specific currency
	// @route  GET /Currency/:symbol
	static async getSpecificCurrency(req, res) {
		const { symbol } = req.params;
		const data = await getCurrencyData();
		try {
			const singleCurrency = data[symbol];
			if (!singleCurrency)
				return res.status(404).send({ error: 'route not found' });
			res.status(200).send(singleCurrency);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
}

module.exports = CurrencyController;
