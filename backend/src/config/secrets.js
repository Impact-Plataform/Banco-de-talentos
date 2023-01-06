const env = process.env;

export const VIA_CURRENCY_URL = (currency) => {
          return `https://economia.awesomeapi.com.br/json/last/${currency}`
}