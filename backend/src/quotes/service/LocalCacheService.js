import { TTL } from "../../config/secrets.js";

const CACHE = new Map();

class LocalCacheService {
  save(key, value) {
    try {
      if (!this.existsForKey(key)) {
        let data = {
          value,
          expire: this.getExpiration(),
        };
        CACHE.set(key, data);
        console.info(`Salvando cache para chave ${key}`);
      }
    } catch (error) {
      console.error(`Erro ao tentar salvar cache para chave ${key}`);
      console.error(error);
    }
  }

  getExpiration() {
    let expire = new Date();
    expire.setSeconds(expire.getSeconds() + TTL);
    return expire;
  }

  get(key) {
    try {
      if (this.existsForKey(key)) {
        console.info(`Cache existente para chave ${key}`);
        let data = CACHE.get(key).value;
        console.info(`Retornando cache para chave ${key}`);
        return data;
      }
      console.error(`Cache não encontrado para chave ${key}`);
    } catch (error) {
      console.error(`Erro ao tentar encontrar cache para chave ${key}`);
      console.error(error);
    }
    return null;
  }

  existsForKey(key) {
    let exists = CACHE.has(key);
    if (exists && this.isExpired(key)) {
      this.remove(key);
      return false;
    }
    return exists;
  }

  isExpired(key) {
    let expire = CACHE.get(key).expire;
    return new Date() > expire;
  }

  remove(key) {
    CACHE.delete(key);
  }

  removeExpiredKeys() {
    let expiredKeys = Array.from(CACHE.keys()).filter((key) => {
      return this.isExpired(key);
    });
    expiredKeys.forEach((key) => {
      this.remove(key);
    });
    console.info(`${expiredKeys.length} keys removed!`);
  }
}
export default new LocalCacheService();


















/* import { TTL } from '../config/secrets.js'
const CACHE = new Map();

class LocalCacheService {
  save(key, value){
   try{
     if(!this.existsForKey(key)){
      let data = {
          value,
          expire: this.getExpiration()
      };
       CACHE.set(key, data);
       console.info(`Salvando cache para chave ${key}`);
     }
   }catch(error){
    console.error(`Erro ao tentar salvar cache para chave ${key}`)
    console.error(error)
   }
  }

  getExpiration() {
    let expire = new Date()
    expire.setSeconds(expire.getSeconds() + TTL);
    return expire;
  }

  get(key){
   try{
     if(this.existsForKey(key)){
          console.info(`Cache existente para ${key}`);
      let data = CACHE.get(key).value;
       console.info(`Retornando cache para chave ${key}`);
       return data;
     }
     console.error(`Cache não encontrado para chave ${key}`)

   }catch(error){
    console.error(`Erro ao tentar salvar cache para chave ${key}`)
    console.error(error)
   }
    return null
  }
  existsForKey(key){
    let exists = CACHE.has(key);
    if(exists && this.isExpired(key)){
       this.remove(key);
       return exists;
    }
  }
  isExpired(key){
    let expire = CACHE.get(key).expire;
    return new Date() > expire;
  }
  remove(key){
    CACHE.delete(key);
  }
  removedExpiredKeys(){
    let expiredKeys = Array.from(CACHE.keys()).filter((key) => {
          return this.isExpired(key)
    })
    expiredKeys.forEach((key)=>{
       this.remove(key)
    })
    console.info(`${expiredKeys.length} keys removed`)
  }

}

export default new LocalCacheService() */