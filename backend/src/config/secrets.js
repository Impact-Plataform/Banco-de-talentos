const env = process.env;

export const VIA_CURRENCY_URL = (currency) => {
          return `https://economia.awesomeapi.com.br/${currency}`
}


export const TTL = 60;
export const CACHE_SCHEDULER = "0 * * * * *";
export const REDIS_ENABLED = env.REDIS_ENABLED ? env.REDIS_ENABLED : true;
export const REDIS_URL = env.REDIS_URL ? env.REDIS_URL : "localhost:6379";