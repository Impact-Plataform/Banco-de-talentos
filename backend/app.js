import express from "express";
import * as dotenv from "dotenv"
import cors from "cors"
import Product from "./src/Controller/product-controller.js"

dotenv.config()

const port = process.env.PORT || 4000
const app = express()

app.listen(port, ()=>{
    if(port == 4000){
        console.log(`Api funcionando na porta : http://localhost:${port}`)
    }else{
        console.log(port)
    }
})
app.use(cors())
app.use(express.json())

Product.route(app)

export default app