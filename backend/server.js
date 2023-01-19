import express from "express";
import cors from "cors";
import main from "./src/db/conn.js"
import Currency from "./src/controllers/CurrencyController.js";
import Products from "./src/controllers/ProductController.js";

export const app = express()

//middleware
app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(cors())

//DB connection
main()

//rota inicial
app.get('/', (req, res) => {
    res.json({message: 'Access route /Products or /Currency.'})
})

Currency.rotas(app)
Products.rotas(app)