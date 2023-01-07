import { Router } from "express";
import { createTable, insertProduct, updateProduct, selectProducts, selectProduct, deleteProduct } from '../DAO/Products.js';

const router = Router();

router.get('/', (req, res) => {
   res.json({
          "status": 200,
          "msg": 'Api Rodando'
   })
})

//create product
/**
 * @swagger
 * components:
 *  schemas:
 *    Product:
 *       type: object
 *       properties:
 *          name:
 *             type: string
 *             description: nome do produto
 *          price:
 *             type: number
 *             description: preço do produto
 *          currency:  
 *             type: string
 *             description: BRL
 *          symbol:
 *             type: string
 *             description: R$
 *       required:
 *          - name
 *          - price
 *          - currency
 *          - symbol
 *       example:
 *          id: 1
 *          name: microfone
 *          price: 400
 *          currency: BRL
 *          symbol: R$
 */






  router.get('/', (req, res) => {
   res.sendFile(__dirname + "./view/index.html")
}) 

router.get('/products', selectProducts);

// get all products
/**
 * @swagger
 * /products:
 *   get:
 *       sumary: return all products
 *       tags: [Product]
 *       responses:
 *          200:
 *             description: all products
 *             content:
 *                application/json:
 *                   schema:
 *                      type: array
 *                      items:
 *                         $ref: '#/components/schemas/Product'
 */


router.get('/product/:id', selectProduct);

// get a product
/**
 * @swagger
 * /product/{id}:
 *   get:
 *       sumary: return a product
 *       tags: [Product]
 *       parameters:
 *          -  in: path
 *             name: id
 *             schema:
 *                type: string
 *             required: true
 *             description: the product id
 *       responses:
 *          200:
 *             description: all products
 *             content:
 *                application/json:
 *                   schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 */


router.post('/product', insertProduct);

//add product
/**
 * @swagger
 * /product:
 *   post:
 *       sumary: create a new product
 *       tags: [Product]
 *       requestBody:
 *          required: true
 *          content:
 *             application/json:
 *                schema:
 *                   type: object
 *                   $ref: '#/components/schemas/Product'
 *       responses:
 *          200: 
 *             description: new product created!
 */

router.put('/product', updateProduct);

//update product

/**
 * @swagger
 * /product:
 *  put:
 *    summary: update a product
 *    tags: [Product]
 *    requestBody:
 *       required: true
 *       content:
 *          application/json:
 *             schema:
 *                type: object
 *                $ref: '#/components/schemas/Product'
 *    responses:
 *       200:
 *          description: product updated
 */




router.delete('/product/:id', deleteProduct);

//delete product

/**
 * @swagger
 * /product/{id}:
 *   delete:
 *       sumary: deleted a product
 *       tags: [Product]
 *       parameters:
 *          -  in: path
 *             name: id
 *             schema:
 *                type: integer
 *             required: true
 *             description: the product id
 *       responses:
 *          200:
 *             description: product deleted
 *             content:
 *                application/json:
 *                   schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Product'
 */



export default router;