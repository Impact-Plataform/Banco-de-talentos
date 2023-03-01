import { baseApi } from "./baseAPI";

export class QuotationApi {
  async getAPIQuotationInfo(endpoint: string) {
    const apiReturn = await baseApi.get(endpoint);
    const data = apiReturn.data;

    return data;
  }
}
