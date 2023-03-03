import { describe, expect, it } from 'vitest'
import { LoadCurrencyBySymbolUseCase } from '../../../../src/application/use-cases/currencies/load-currency-by-symbol-use-case'

describe('Load Currency by symbol', () => {
  it('should return all currency USD', async () => {
    const currencyUSD = await LoadCurrencyBySymbolUseCase.execute({ symbol: 'USD' })
    expect(currencyUSD).toBeTruthy()
  })

  it('should return currency EUR when params is passed in lowerCase', async () => {
    const currencyEUR = await LoadCurrencyBySymbolUseCase.execute({ symbol: 'eur' })
    expect(currencyEUR.code).toBe('EUR')
  })
})
