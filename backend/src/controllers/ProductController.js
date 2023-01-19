import { prices } from "../services/cache.js";
import { Product } from "../models/ProductModel.js";

class Products {
    static rotas(app) {
        app.post('/Products', async (req, res) => {
            const {name, category, price_BRL} = req.body
            const product = {
                name,
                category,
                price_BRL
            }
            
            try {
                await Product.create(product)
                res.status(201).json({message: 'Product created!'})
            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.get('/Products', async (req, res) => {
            try {
                const getProducts = await Product.find()
                if (getProducts) {
                    getProducts.map((product) => {
                        product.price_USD = +(product.price_BRL/prices.USD.bid).toFixed(2)
                        product.price_EUR = +(product.price_BRL/prices.EUR.bid).toFixed(2)
                    })
                }

                res.status(200).json(getProducts)

            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.get('/Products/:id', async (req, res) => {
            const id = req.params.id

            try {
                const product = await Product.findOne({_id: id})
                if(product) {
                    product.price_USD = (product.price_BRL/prices.USD.bid).toFixed(2)
                    product.price_EUR = (product.price_BRL/prices.EUR.bid).toFixed(2)
                } else {
                    throw new Error(`Product with id ${req.params.id} not found`)
                }

                res.status(200).json(product)

            } catch (error) {
                res.status(404).json(error.message)
            }
        })

        app.patch('/Products/:id', async (req, res) => {
            const id = req.params.id
            const { name, category, price_BRL } = req.body
            const product = {
                name,
                category,
                price_BRL
            }

            try {
                const updatedProduct = await Product.updateOne({_id: id}, product, { runValidators: true })
                if(updatedProduct.matchedCount === 0) {
                    throw new Error(`Product with id ${req.params.id} not found`)
                }
                res.status(200).json(product)
            } catch (error) {
                res.status(404).json({error: "Error updating product."})
            }
        })

        app.delete('/Products/:id', async (req, res) => {
            const id = req.params.id
            
            try {
                const product = await Product.findOne({_id: id})
                if(!product) {
                    throw new Error(`Product with id ${req.params.id} not found.`)
                }
                await Product.deleteOne({_id: id})
                res.status(200).json({message: `Product with id ${req.params.id} deleted.`})
            } catch (error) {
                res.status(404).json(error.message)
            }
        })
    }
}

export default Products