import { QuotationApi } from "../../src/services/QuotationApi";

describe("Quotation api service", () => {
  test("get dollar currency info from url", async () => {
    const dollarInfo = await QuotationApi.getAPIQuotationInfo("/USD-BRL");
    console.log(dollarInfo);
    expect(dollarInfo).toBeTruthy();
  });
});
