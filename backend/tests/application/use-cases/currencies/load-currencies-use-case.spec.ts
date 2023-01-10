import { describe, expect, it } from 'vitest'
import { cacheUtil } from '../../../../src/shared/utils/cacheUtil'
import { LoadCurrenciesUseCase } from '../../../../src/application/use-cases/currencies/load-currencies-use-case'

describe('Load Currencies', () => {
  it('should return all currencies data', async () => {
    const allCurrenciesData = await LoadCurrenciesUseCase.execute()
    expect(allCurrenciesData).toBeTruthy()
  })

  it('should persisted api data in cache', async () => {
    const allCurrencies = await LoadCurrenciesUseCase.execute()
    const cache = cacheUtil.get('api-data')
    expect(cache).toEqual(allCurrencies)
  })
})
