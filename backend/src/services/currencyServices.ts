interface Currency {
  code: String;
  codein: String;
  name: String;
  high: String;
  low: String;
  pctChange: String;
  bid: String;
  ask: String;
  timestamp: String;
  create_date: String;
}

export interface ICurrency {
  [key: string]: Currency;
}

export class CurrencyServices {
  static async get() {
    const currency: ICurrency = await (
      await fetch("https://economia.awesomeapi.com.br/all")
    ).json();

    return currency;
  }
}
