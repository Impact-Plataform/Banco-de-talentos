import ProductDbMethod from "../DAO/product-method.js";
import ProductModel from "../Model/product-model.js";
import Validate from "../Service/validate.js";
import getQuotation from "../Service/fecthservice.js";

ProductDbMethod.createTableProduct();
const quotation = await getQuotation("https://economia.awesomeapi.com.br/all")


class Product extends Validate{
    static route(app){
        app.get("/Products", async(req, res) =>{
            try{
                const response = await ProductDbMethod.listAllProducts()
                if(response){
                    response.map((element) => {
                        element.usdprice = (element.price/quotation.USD.bid).toFixed(2)
                        element.eurprice = (element.price/quotation.EUR.bid).toFixed(2)
                    })
                }
                res.status(200).json(response)
            }catch(e){
                res.status(404).json(e.message)
            }
        })

        app.get("/Currency", async(req, res)=>{
            res.status(200).json(quotation)
        })

        app.get("/Currency/:symbol", async(req, res)=>{
            const symbol = req.params.symbol
            res.status(200).json(quotation[symbol])
        })

        app.get("/Products/:id", async(req,res)=>{
                try{
                    const params = parseInt(req.params.id)
                    if(!params){
                        throw new Error(`o id ${req.params.id} não é númerico, a busca por id deve ser feita com id númerico.`)
                    }else{
                        const product = await ProductDbMethod.listProductById(req.params.id)
                        if(!product){
                            throw new Error(`Nenhum produto encontrado com id ${req.params.id}`)
                        }else{
                            product.usdprice = (product.price/quotation.USD.bid).toFixed(2)
                            product.eurprice = (product.price/quotation.EUR.bid).toFixed(2)
                            res.status(200).json(product)
                        }
                    }
                }catch(e){
                    if(e.message == `Nenhum produto encontrado com id ${req.params.id}`){
                        res.status(404).json(e.message)
                    }else{
                        res.status(400).json(e.message)
                    }
                }
        })

        app.post("/Products", async(req, res)=>{
            const body = req.body
            const valid = this.isValid(...Object.values(body))
            try{
                if([...Object.values(body)].length != 6){
                    throw new Error("requisição quantidade de chaves e valores incorreta, revise a requisição")
                }
                if(valid){
                    const product = new ProductModel(...Object.values(body))
                    const response = await ProductDbMethod.insertProduct(product)
                    res.status(201).json(response)
                }else{
                    throw new Error("Corpo da requisição preechido incorretamente, revise-o e tente novamente")
                }
            }catch(e){
                res.status(400).json(e.message)
            }
        })

        app.put("/Products/:id", async(req,res)=>{
            const body = req.body
            const id = req.params.id
            const valid = this.isValid(...Object.values(body))
            try{
                if([...Object.values(body)].length != 6){
                    throw new Error("requisição não pode ser resolvida, quantidade de chaves e valores incorreta, revise a requisição")
                }
                const productId = await ProductDbMethod.listProductById(id)
                if(!productId){
                    throw new Error(`o Produto de id ${id} não encontrado, verifique se o id está correto e tente novamente`)
                }
                if(valid){
                    const product = new ProductModel(...Object.values(body))
                    const response = await ProductDbMethod.updateProduct(id, product)
                    res.status(200).json(response)
                }else{
                    throw new Error("Corpo da requisição preechido incorretamente, revise-o e tente novamente")
                }
            }catch(e){
                if(e.message == `o Produto de id ${id} não encontrado, verifique se o id está correto e tente novamente`){
                    res.status(404).json(e.message)
                }else{
                    res.status(400).json(e.message)
                }
            }
        })

        app.delete("/Products/:id", async(req,res)=>{
            const id = req.params.id
            const productId = await ProductDbMethod.listProductById(id)
            try{
                if(!productId){
                    throw new Error(`o id ${id} que está tentando deletar não pode ser encontrado`)
                }
                const response = await ProductDbMethod.deleteProduct(id)
                res.status(200).json(response)
            }catch(e){
                if(e.message == `o id ${id} que está tentando deletar não pode ser encontrado`){
                    res.status(404).json(e.message)
                }else{
                    res.status(400).json(e.message)
                }
            }
            
        })
    }
}

export default Product