const {
	getAllProducts,
	createProduct
} = require('../controllers/ProductController');
const { Router } = require('express');
const router = Router();

router.get('/Products', getAllProducts).post('/Products', createProduct);

module.exports = router;
