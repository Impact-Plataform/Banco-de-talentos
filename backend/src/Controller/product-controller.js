import ProductDbMethod from "../DAO/product-method";
import ProductModel from "../Model/product-model";
import Validate from "../Service/validate";

ProductDbMethod.createTableProduct();

class Product extends Validate{
    static route(app){
        app.get("/Products", async(req, res) =>{
            try{
                const response = await ProductDbMethod.listAllProducts()
                res.status(200).json(response)
            }catch(e){
                res.status(404).json(e.message)
            }
        })

        app.get("/Products/:id", async(req,res)=>{
            if(this.validateNumber(req.params.id)){
                try{
                    const product = ProductDbMethod.listProductById(req.params.id)
                    if(!product){
                        throw new Error(`Nenhum produto encontrado com id ${req.params.id}`)
                    }else{
                        res.status(200).json(product)
                    }
                }catch(e){
                    res.status(404).json(e.message)
                }
            }
        })

        app.post("/Products", async(req, res)=>{
            const body = req.body
            const valid = this.isValid(...Object.values(body))
            try{
                if(valid){
                    const product = new Product(...Object.values(body))
                    const response = await ProductDbMethod.insert(product)
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
                const productId = await ProductDbMethod.listById(id)
                if(!productId){
                    throw new Error(`o Produto de id ${id} não encontrado, verifique se o id está correto e tente novamente`)
                }
                if(valid){
                    const product = new ProductModel(...Object.values(body))
                    const response = await ProductDbMethod.updateById(id, product)
                    res.status(200).json(response)
                }else{
                    throw new Error("Corpo da requisição preechido incorretamente, revise-o e tente novamente")
                }
            }catch(e){
                res.status(400).json(e.message)
            }
        })

        app.delete("/Products/:id", async(req,res)=>{
            const id = req.params.id
            const productId = await ProductDbMethod.listById(id)
            try{
                if(!productId){
                    throw new Error(`o id ${id} que está tentando deletar não pode ser encontrado`)
                }
                const response = await ProductDbMethod.deleteById(id)
                res.status(200).json(response)
            }catch(e){
                res.status(400).json(e.message)
            }
            
        })
    }
}

export default Product