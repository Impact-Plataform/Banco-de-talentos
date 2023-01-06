import { createClient } from "redis";
import { TTL, REDIS_URL } from "../../config/secrets.js";



const redisRepository = createClient({
  url: `redis://${REDIS_URL}`,
});

redisRepository.on("error", (error) => {
  console.error("Redis client error", error);
});

await redisRepository.connect();

class CacheRepository {
  async save(key, value) {
    try {
      await redisRepository.set(key, value, {
        EX: TTL,
      });
    } catch (error) {
      console.error("Erro ao tentar salvar dados no Redis.", error);
    }
  }

  async get(key) {
    try {
      return await redisRepository.get(key);
    } catch (error) {
      console.error("Erro ao tentar recuperar dados no Redis.", error);
      return null;
    }
  }
}

export default new CacheRepository();