const express = require('express')
const rotasCotacoes = express()
const cotacoes = require('../controladores/cotacoes')

//Listar cotações
rotasCotacoes.get('/Currency', cotacoes.listar)
//Detalhar Cotação
rotasCotacoes.get('/Currency/:symbol', cotacoes.detalhar)

module.exports = rotasCotacoes
