import { getCurrency } from "../services/cache.js"

class Currency {
	static rotas(app) {
        app.get('/Currency', async (req, res) => {
            const response = await getCurrency();

            try {
                res.status(200).json(response);
            } catch (err) {
                res.status(400).json(err.message);
            }
        });
        
        app.get('/Currency/:symbol', async (req, res) => {
            const { symbol } = req.params;
            const response = await getCurrency();

            try {
                const currencySymbol = response[symbol];
                if (!currencySymbol)
                    return res.status(404).json({ error: 'Currency not found' });
                res.status(200).json(currencySymbol);
            } catch (err) {
                res.status(400).json(err.message);
            }
        });
    }
}

export default Currency;