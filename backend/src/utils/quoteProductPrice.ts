import { CurrencyCache } from "../cache/CurrencyCache";

export async function quoteProductPrice(price: number) {
  const { EUR, USD } = await CurrencyCache.getCurrency();
  const formatterEUR = new Intl.NumberFormat("de-DE", {
    maximumFractionDigits: 2,
  });
  const formatterUSD = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 2,
  });

  return {
    eurPrice: Number(
      formatterEUR.format(price / Number(EUR.bid)).replace(",", ".")
    ),
    usdPrice: Number(formatterUSD.format(price / Number(USD.bid))),
  };
}
