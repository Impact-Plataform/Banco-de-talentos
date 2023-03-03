import axios from 'axios'
import { cacheUtil } from '../utils/cacheUtil'

export async function getCurrenciesData (): Promise<any> {
  const cacheData = cacheUtil.get('api-data')

  if (!cacheData) {
    const { data } = await axios.get('https://economia.awesomeapi.com.br/all')
    cacheUtil.set({ key: 'api-data', data })
    return data
  }

  return cacheData
}
