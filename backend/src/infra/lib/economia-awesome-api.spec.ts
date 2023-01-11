import { describe, expect, it } from 'vitest'
import { cacheUtil } from '../../shared/utils/cacheUtil'
import { getCurrenciesData } from './economia-awesome-api'

describe('Get Currencies', () => {
  it('should return all currencies data', async () => {
    const allCurrenciesData = await getCurrenciesData()
    expect(allCurrenciesData).toBeTruthy()
  })

  it('should persisted api data in cache', async () => {
    const allCurrencies = await getCurrenciesData()
    const cache = cacheUtil.get('api-data')
    expect(cache).toEqual(allCurrencies)
  })
})
