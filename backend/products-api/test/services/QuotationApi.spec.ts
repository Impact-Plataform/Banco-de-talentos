import { QuotationApi } from "../../src/services/QuotationApi";

describe("Quotation api service", () => {
  test("get dollar currency info from url", async () => {
    const quotationApi = new QuotationApi();
    const dollarInfo = await quotationApi.getAPIQuotationInfo("/USD-BRL");
    expect(dollarInfo).toBeTruthy();
  });
});
