import { REDIS_ENABLED } from "../../config/secrets.js";
import LocalCacheService from "./LocalCacheService.js";
import RedisCacheService from "./RedisCacheService.js";

class CacheServiceWrapper {
  async save(key, value) {
    if (REDIS_ENABLED) {
      return await RedisCacheService.save(key, value);
    }
    LocalCacheService.save(key, value);
  }

  async get(key) {
    if (REDIS_ENABLED) {
      return await RedisCacheService.get(key);
    }
    return LocalCacheService.get(key);
  }

  async exists(key) {
    if (REDIS_ENABLED) {
      return await RedisCacheService.existsForKey(key);
    }
    return LocalCacheService.existsForKey(key);
  }
}

export default new CacheServiceWrapper();