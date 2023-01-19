import { ICurrency } from '../interfaces/currencyInterface';

import NodeCache from 'node-cache';

export class Cache {

	private myCache: NodeCache;

	constructor(timeCacheInSeconds: number) {
		this.myCache = new NodeCache({ stdTTL: timeCacheInSeconds });
	}

	getCache(cacheName: string): ICurrency[] | undefined {
		const cache: ICurrency[] | undefined = this.myCache.get(cacheName);

		return cache;
	}

	setCache(cacheName: string, data: ICurrency[]): void {
  
		this.myCache.set(cacheName, data);
	}

}

export const cache = new Cache(40);