const express = require('express')
const app = express()
const rotasProdutos = require('./rotas/produtos')
const rotasCotacoes = require('./rotas/cotacoes')

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())
app.use(rotasProdutos)
app.use(rotasCotacoes)

app.listen(3000)
