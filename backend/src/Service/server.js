import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import Product from "../Controller/product-controller";

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
Product.route(app)

export default app