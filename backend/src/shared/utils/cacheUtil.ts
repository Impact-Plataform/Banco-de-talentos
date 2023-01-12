import NodeCache from 'node-cache'

interface SetCacheProps {
  key: string
  data: any
}

class Cache {
  public cache: NodeCache

  constructor (tll: number) {
    this.cache = new NodeCache({ stdTTL: tll })
  }

  get (key: string): any {
    const data = this.cache.get(key)
    return data
  }

  set ({ key, data }: SetCacheProps): any {
    this.cache.set(key, data)
    return data
  }
}

export const cacheUtil = new Cache(100)
