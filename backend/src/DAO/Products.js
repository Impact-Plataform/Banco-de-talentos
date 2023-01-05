import { openDb } from '../configDB.js';
import Validacoes from "../services/Validations.js";

export async function createTable(){
   openDb().then(db => {
          db.exec('CREATE TABLE IF NOT EXISTS Product (id INTEGER PRIMARY KEY, name TEXT, price DECIMAL(10,2), currency TEXT, symbol TEXT)')
   })
}

export async function insertProduct(req, res){
         
       let product = req.body;
          openDb().then(db => {
          if(Validacoes.valSymbol(product.symbol) && Validacoes.valCurrency(product.currency)){                
                 db.run('INSERT INTO Product (name, price, currency, symbol) VALUES(?,?,?,?)', [product.name, product.price, product.currency, product.symbol]);
        }});

        
        if(Validacoes.valSymbol(product.symbol) && Validacoes.valCurrency(product.currency)){
              res.json({
                   "statusCode": 200
               })
            }else{
              res.json({
                   "stautsCode": "Houve algum erro. Por favor revise o símbolo (R$) e o código (BRL) para que fique de acordo com a moeda brasileira."
            })
     }
       }

export async function updateProduct(req, res){
       let product = req.body;
       openDb().then(db => {
          if(Validacoes.valSymbol(product.symbol) && Validacoes.valCurrency(product.currency)){
             db.run('UPDATE Product SET name=?, price=?, currency=?, symbol=? WHERE id=?', [product.name, product.price, product.currency, product.symbol, product.id]);          
     }})
     if(Validacoes.valSymbol(product.symbol) && Validacoes.valCurrency(product.currency)){
       res.json({
            "statusCode": 200
        })
     }else{
       res.json({
            "stautsCode": "Houve algum erro. Por favor revise o símbolo (R$) e o código (BRL) para que fique de acordo com a moeda brasileira."
     })
    }
       }

export async function selectProducts(req, res){
        openDb().then(db => {
          db.all('SELECT * FROM Product')
              .then(products => res.json(products))
       })
}

export async function selectProduct(req, res){
       let id = req.body.id;
       openDb().then(db => {
             db.all('SELECT * FROM Product WHERE id=?', [id])
              .then(product => res.json(product))
       })
}

export async function deleteProduct(req, res){
       let id = req.body.id;
       openDb().then(db => {
        db.all('DELETE FROM Product WHERE id=?', [id])
              .then(res => res)
       });
       res.json({
              "statusCode": 200
})
}