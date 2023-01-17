const express = require('express')
const rotasProdutos = express()
const produtos = require('../controladores/produtos')

//Cadastrar Produto
rotasProdutos.post('/Products', produtos.cadastrar)
//Listar Produto(s)
rotasProdutos.get('/Products', produtos.listar)
//Detalhar Produto
rotasProdutos.get('/Products/:id', produtos.detalhar)
//Editar Produto
rotasProdutos.put('/Products/:id', produtos.editar)
//Excluir Produto
rotasProdutos.delete('/Products/:id', produtos.excluir)

module.exports = rotasProdutos
