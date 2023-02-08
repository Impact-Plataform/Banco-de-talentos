import { CreateProduct } from "../../usecases/createProduct/CreateProduct";
import { HttpResponse } from "../ports/httpResponse";
import { RequestHTTP } from "../ports/requestHttp";
import { create } from "../utils/httpHelpers";

export class ProductController {
  constructor(private createProduct: CreateProduct) {}

  async create(request: RequestHTTP): Promise<HttpResponse> {
    const createProduct = this.createProduct.execute(request.body);

    return create("created");
  }
}
