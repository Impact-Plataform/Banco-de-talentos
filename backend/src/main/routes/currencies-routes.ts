import { Router } from 'express'
import { LoadCurrenciesController } from '../../infra/http/controllers/currencies/load-currencies-controller'
import { LoadCurrencyBySymbolController } from '../../infra/http/controllers/currencies/load-currency-by-symbol-controller'

const currenciesRoutes = Router()

currenciesRoutes.get('/currency/:symbol', new LoadCurrencyBySymbolController().handle)
currenciesRoutes.get('/currency', new LoadCurrenciesController().handle)

export { currenciesRoutes }
