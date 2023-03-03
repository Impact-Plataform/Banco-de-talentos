import { Request, Response } from 'express'
import { LoadCurrencyBySymbolUseCase } from '../../../../application/use-cases/currencies/load-currency-by-symbol-use-case'

export class LoadCurrencyBySymbolController {
  async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { symbol } = request.params
      const currencies = await LoadCurrencyBySymbolUseCase.execute({ symbol })
      return response.json(currencies)
    } catch (err) {
      return response.status(err.statusCode || 500).json({ error: err.message })
    }
  }
}
