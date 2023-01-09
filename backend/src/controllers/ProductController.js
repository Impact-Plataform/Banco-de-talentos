const db = require('../models');

class ProductController {
	// @desc   Get all products
	// @route  GET /Products
	static async getAllProducts(_, res) {
		try {
			const allProducts = await db.Product.findAll();
			return res.status(200).send(allProducts);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	// @desc   Create a new product
	// @route  POST /Products
	static async createProduct(req, res) {
		try {
			const newProduct = req.body;
			await db.Product.create(newProduct);
			return res.status(201).send({
				message: 'product successfully created',
				productInfo: newProduct
			});
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
}

module.exports = ProductController;
