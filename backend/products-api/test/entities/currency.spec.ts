import { Currency, CurrencyProps } from "../../src/entities/Currency";

describe("Curreny entity", () => {
  const currencyProps: CurrencyProps = {
    code: "USD",
    codeIn: "BRL",
    name: "Dólar Americano/Real Brasileiro",
    high: "5",
  };
  test("Should be possible create a Currency", () => {
    const currency = new Currency(currencyProps);
    expect(currency).toBeInstanceOf(Currency);
  });
});
