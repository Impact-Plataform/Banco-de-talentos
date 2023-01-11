const express = require('express')
const rotasProdutos = express()
const produtos = require('../controladores/produtos')

//Cadastrar Produto
rotasProdutos.post('/Product', produtos.cadastrar)
//Listar Produto(s)
rotasProdutos.get('/Product', produtos.listar)
//Detalhar Produto
rotasProdutos.get('/Product/:id', produtos.detalhar)
//Editar Produto
rotasProdutos.put('/Product/:id', produtos.editar)
//Excluir Produto
rotasProdutos.delete('/Product/:id', produtos.excluir)

module.exports = rotasProdutos
