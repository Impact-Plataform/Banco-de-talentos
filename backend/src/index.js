const express = require('express')
const app = express()

const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('../swagger.json')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.use(express.json())

app.listen(3000)
