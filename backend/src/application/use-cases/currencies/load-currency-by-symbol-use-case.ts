/* eslint-disable @typescript-eslint/no-extraneous-class */
import { getCurrenciesData } from '../../../infra/lib/api/economia-awesome-api'

interface LoadCurrenciesBySymbolRequest {
  symbol: string
}

export class LoadCurrencyBySymbolUseCase {
  static async execute ({ symbol }: LoadCurrenciesBySymbolRequest): Promise<any> {
    const currenciesData = await getCurrenciesData()
    const currencyBySymbol = currenciesData[symbol.toUpperCase()]
    return currencyBySymbol
  }
}
