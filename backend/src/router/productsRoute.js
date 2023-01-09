const {
	getAllProducts,
	createProduct,
	getOneProduct,
	editProduct,
	deleteProduct
} = require('../controllers/ProductController');
const { Router } = require('express');
const router = Router();

router
	.get('/Products', getAllProducts)
	.post('/Products', createProduct)
	.get('/Products/:id', getOneProduct)
	.put('/Products/:id', editProduct)
	.put('/Products/:id', editProduct)
	.delete('/Products/:id', deleteProduct);

module.exports = router;
