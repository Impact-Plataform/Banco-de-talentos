import { Request, Response } from 'express'
import { getCurrenciesData } from '../../../../shared/utils/economia-awesome-api'

export class LoadCurrenciesController {
  async handle (_request: Request, response: Response): Promise<Response> {
    try {
      const currenciesData = await getCurrenciesData()
      return response.json(currenciesData)
    } catch (err) {
      return response.status(err.statusCode || 500).json({ error: err.message })
    }
  }
}
