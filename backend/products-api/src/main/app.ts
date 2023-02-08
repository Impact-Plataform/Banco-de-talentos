import express from 'express'
import { middleWares } from './middlewares'

const app = express()
middleWares(app)

export default app