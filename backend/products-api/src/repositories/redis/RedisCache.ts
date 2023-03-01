import { IRedisCache } from "../ports/IRedisCache";
import {client} from './client/redisClient'

export class RedisCache implements IRedisCache {
    async get(key: string): Promise<any> {
        const getValue = await client.get(key)
        return getValue ? 
        JSON.parse(getValue):
        false
    }

    async set(key: string, value: any): Promise<any> {
        return await client.set(key, JSON.stringify(value))
    }

}