/* eslint-disable @typescript-eslint/no-extraneous-class */
import { getCurrenciesData } from '../../../infra/lib/api/economia-awesome-api'

export class LoadCurrenciesUseCase {
  static async execute (): Promise<any> {
    const currenciesData = await getCurrenciesData()
    return currenciesData
  }
}
