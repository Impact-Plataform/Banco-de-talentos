import { CreateProduct } from "../../usecases/createProduct/CreateProduct";
import { HttpResponse } from "../ports/httpResponse";
import { RequestHTTP } from "../ports/requestHttp";
import { clientError, create } from "../utils/httpHelpers";

export class ProductController {
  constructor(private createProduct: CreateProduct) {}

  async create(request: RequestHTTP): Promise<HttpResponse> {
    const createProduct = await this.createProduct.execute(request.body);

    return createProduct
      ? create("created")
      : clientError("already exists a product with this name");
  }
}
