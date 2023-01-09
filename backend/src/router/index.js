const products = require('./productsRoute');

module.exports = (app) => {
	app.use(products);
};
