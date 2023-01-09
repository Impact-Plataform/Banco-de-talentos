const {
	getAllProducts,
	createProduct,
	getOneProduct,
	editProduct,
	deleteProduct
} = require('../controllers/ProductController');
const { Router } = require('express');
const router = Router();
const joi = require('../utility/joiValidation');
const { validate } = require('express-validation');

router
	.get('/Products', getAllProducts)
	.post('/Products', validate(joi.validateProduct), createProduct)
	.get('/Products/:id', getOneProduct)
	.put('/Products/:id', validate(joi.validateProduct), editProduct)
	.delete('/Products/:id', deleteProduct);

module.exports = router;
