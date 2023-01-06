import CacheRepository from "../repository/CacheRepository.js";

class RedisCacheService {
  async save(key, value) {
    try {
      console.log(`Salvando dados para chave ${key}`);
      await CacheRepository.save(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Erro ao tentar salvar cache para chave ${key}`, error);
    }
  }

  async get(key) {
    try {
      let data = await CacheRepository.get(key);
      console.log(`Cache encontrado para chave ${key}`);
      return JSON.parse(data);
    } catch (error) {
      console.error(`Erro ao buscar cache para chave ${key}`, error);
      return null;
    }
  }

  async existsForKey(key) {
    try {
      let data = await CacheRepository.get(key);
      if (data) {
        console.log(`Cache existente para chave ${key}`);
        return true;
      }
    } catch (error) {
      console.error(`Erro ao consultar cache para chave ${key}`, error);
    }
    return false;
  }
}

export default new RedisCacheService();