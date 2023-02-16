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
  test("Should get all props", () => {
    const currency = new Currency(currencyProps);
    expect(currency.code).toBe("USD");
    expect(currency.codeIn).toBe("BRL");
    expect(currency.name).toBe("Dólar Americano/Real Brasileiro");
    expect(currency.high).toBe("5");
  });
});
