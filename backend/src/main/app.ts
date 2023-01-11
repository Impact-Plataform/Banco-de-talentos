import express from 'express'
import cors from 'cors'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from './docs/swagger-config'
import { productsRoutes } from './routes/products-routes'
import { currenciesRoutes } from './routes/currencies-routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(productsRoutes)
app.use(currenciesRoutes)

export { app }
