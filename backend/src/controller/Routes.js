import { Router } from "express";
import { createTable, insertProduct, updateProduct, selectProducts, selectProduct, deleteProduct } from '../DAO/Products.js';

const router = Router();

router.get('/', (req, res) => {
   res.json({
          "status": 200,
          "msg": 'Api Rodando'
   })
})

/* router.get('/', (req, res) => {
   res.sendFile(__dirname + "./view/index.html")
}) */

router.get('/products', selectProducts);
router.get('/product', selectProduct);
router.post('/product', insertProduct);
router.put('/product', updateProduct);
router.delete('/product', deleteProduct);


export default router;