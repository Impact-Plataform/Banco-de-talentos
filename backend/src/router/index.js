const products = require('./productsRoute');
const currencies = require('./currenciesRoute');
const notFound = require('./notFoundRoute');

module.exports = (app) => {
	app.use(products);
	app.use(currencies);
	app.use(notFound);
};
