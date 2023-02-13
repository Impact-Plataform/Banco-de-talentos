import { UsecaseProduct } from "../usecases/UsecaseProduct";
import { HttpResponse } from "./ports/httpResponse";
import { RequestHTTP } from "./ports/requestHttp";
import { clientError, create, ok } from "./utils/httpHelpers";

export class ProductController {
  constructor(private usecaseProduct: UsecaseProduct) {}

  async create(request: RequestHTTP): Promise<HttpResponse> {
    const createProduct = await this.usecaseProduct.create(request.body);

    return createProduct
      ? create("created")
      : clientError("already exists a product with this name");
  }

  async getProducts(): Promise<HttpResponse> {
    const allProducts = await this.usecaseProduct.getAllProducts();
    return ok(allProducts);
  }

  async deleteProduct(name: string): Promise<HttpResponse> {
    const deleteSuccesfully = await this.usecaseProduct.deleteByname(name);
    return deleteSuccesfully
      ? ok(`Product name ${name} deleted successfully`)
      : clientError("Does not exists a product with this name");
  }
}
