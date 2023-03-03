/* eslint-disable @typescript-eslint/no-extraneous-class */
import { getCurrenciesData } from '../../../shared/utils/economia-awesome-api'
import { AppError } from '../../../shared/errors/app-error'

interface LoadCurrenciesBySymbolRequest {
  symbol: string
}

export class LoadCurrencyBySymbolUseCase {
  static async execute ({ symbol }: LoadCurrenciesBySymbolRequest): Promise<any> {
    const currenciesData = await getCurrenciesData()
    const currencyBySymbol = currenciesData[symbol.toUpperCase()]
    if (!currencyBySymbol) {
      throw new AppError('Currency with specified symbol was not found', 404)
    }
    return currencyBySymbol
  }
}
