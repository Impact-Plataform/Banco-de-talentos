interface Currency {
  code: String;
  codein: String;
  name: String;
  high: Number;
  low: Number;
  pctChange: Number;
  bid: Number;
  ask: Number;
  timestamp: Number;
  create_date: Date;
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
