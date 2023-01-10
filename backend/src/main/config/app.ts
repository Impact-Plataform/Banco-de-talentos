import express from 'express'
import cors from 'cors'
import { productsRoutes } from '../routes/create-products-routes'

const app = express()

app.use(cors())
app.use(express.json())
app.use(productsRoutes)
app.get('/', (_req, res) => {
  res.json({
    message: 'hello'
  })
})

export { app }
