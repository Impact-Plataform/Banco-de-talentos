import { Router } from 'express'
import { LoadCurrenciesController } from '../../infra/http/controllers/currencies/load-currencies-controller'
import { LoadCurrencyBySymbolController } from '../../infra/http/controllers/currencies/load-currency-by-symbol-controller'

const currenciesRoutes = Router()

currenciesRoutes.get('/currency', new LoadCurrencyBySymbolController().handle)
currenciesRoutes.get('/currency/:id', new LoadCurrenciesController().handle)

export { currenciesRoutes }
