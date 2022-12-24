import api from "../../../libs/awesomeApi/api";
import { Iquotation } from "../../../libs/awesomeApi/quotation.interface";
const result = require("../../../libs/awesomeApi/result");
import CheckTime from "../../../utils/CheckTime";
import Product from "../../models/Product.model";
const NodeCache = require("node-cache");
const cache = new NodeCache();
class QuotationService {
  async getQuotation(items: string[] = []): Promise<Iquotation[]> {
    let quotations: Iquotation[] | undefined = this.checkCacheQuotation();

    if (!quotations) {
      //Se deseja efetuar vários testes cujo reinicio da api é necessário comente a linha abaixo e descomente a linha do result
      const { data } = await api.get<Iquotation[]>("/all");
      // const data = result;
      quotations = [];
      for (let item in data) {
        quotations.push(data[item]);
      }
      cache.set("quotations", quotations);
    }

    if (!(items.length > 0)) {
      return quotations;
    }
    let filteredQuotations: Iquotation[] = quotations.filter(
      (quotation: Iquotation) => {
        const itemIndex = items.findIndex((item) => quotation.code === item);
        if (itemIndex >= 0) {
          return quotation;
        }
      }
    );
    return filteredQuotations;
  }
  async transformQuotation(products: Product[]): Promise<Product[]> {
    const quotations: Iquotation[] = await this.getQuotation(["USD", "EUR"]);

    for (let product of products) {
      quotations.map((quotation) => {
        //As cotações são dinâmicamente associadas ao produto, mas se desejar incluir uma cotação diferente, também é necessário adiciona-la ao ProductModel
        product[`price${quotation.code}`] = Number(
          (product.price / quotation.bid).toFixed(2)
        );
      });
    }
    return products;
  }
  async transformQuotationSingle(product: Product): Promise<Product> {
    const quotations: Iquotation[] = await this.getQuotation(["USD", "EUR"]);
    quotations.map((quotation) => {
      //As cotações são dinâmicamente associadas ao produto, mas se desejar incluir uma cotação diferente, também é necessário adiciona-la ao ProductModel
      product[`price${quotation.code}`] = Number(
        (product.price / quotation.bid).toFixed(2)
      );
    });
    return product;
  }

  checkCacheQuotation(): Iquotation[] | undefined {
    let quotations: Iquotation[] | undefined = cache.get("quotations");
    let savedDate: number | undefined = cache.get("date");

    if (!savedDate) {
      savedDate = new Date().getTime();
      cache.set("date", savedDate);
    }
    const dayPassed = CheckTime.dayPassed(savedDate);
    if (dayPassed) {
      quotations = undefined;
      cache.set("date", new Date().getTime());
    }
    return quotations;
  }
}

export default new QuotationService();
