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
	// @desc   GET selected product
	// @route  GET /Products/:id
	static async getOneProduct(req, res) {
		try {
			const { id } = req.params;
			const selectedProduct = await db.Product.findOne({ where: { id: +id } });
			if (!selectedProduct)
				return res
					.status(404)
					.send({ error: `product of id ${id} does not exist` });
			return res.status(200).send(selectedProduct);
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	// @desc   Edit selected product
	// @route  PUT /Products/:id
	static async editProduct(req, res) {
		const { id } = req.params;
		try {
			const newInfo = req.body;
			await db.Product.update(newInfo, { where: { id: +id } });
			const updatedProduct = await db.Product.findOne({ where: { id: +id } });
			if (!updatedProduct)
				return res
					.status(404)
					.send({ error: `product of id ${id} does not exist` });
			return res.status(200).send({
				message: `product of id ${id} updated`,
				productInfo: updatedProduct
			});
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
	// @desc   Delete selected product
	// @route  DELETE /Products/:id
	static async deleteProduct(req, res) {
		const { id } = req.params;
		try {
			const selectedProduct = await db.Product.findOne({ where: { id: +id } });
			if (!selectedProduct)
				return res
					.status(404)
					.send({ error: `product of id ${id} does not exist` });
			await db.Product.destroy({ where: { id: +id } });

			return res.status(200).send({
				success: `product of id ${id} deleted`,
				deletedProductInfo: selectedProduct
			});
		} catch (err) {
			res.status(400).send(err.message);
		}
	}
}

module.exports = ProductController;
