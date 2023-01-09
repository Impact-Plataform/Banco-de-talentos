const products = require('./productsRoute');
const currencies = require('./currenciesRoute');

module.exports = (app) => {
	app.use(products);
	app.use(currencies);
};
