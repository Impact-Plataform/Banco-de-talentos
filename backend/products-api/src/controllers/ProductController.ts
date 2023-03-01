import { UsecaseProduct } from "../usecases/UsecaseProduct";
import { HttpResponse } from "./ports/httpResponse";
import { RequestHTTP } from "./ports/requestHttp";
import { clientError, create, ok } from "./utils/httpHelpers";

export class ProductController {
  constructor(private usecaseProduct: UsecaseProduct) {}

  async create(request: RequestHTTP): Promise<HttpResponse> {
    const createProduct = await this.usecaseProduct.create(request.body);

    return createProduct
      ? create(createProduct)
      : clientError("already exists a product with this name");
  }

  async getProducts(): Promise<HttpResponse> {
    const allProducts = await this.usecaseProduct.getAllProducts();
    return ok(allProducts);
  }

  async deleteProduct(paramId: string): Promise<HttpResponse> {
    const deleteSuccesfully = await this.usecaseProduct.deleteById(paramId);
    return deleteSuccesfully
      ? ok(`Product deleted successfully`)
      : clientError("Does not exists a product with this id");
  }

  async updateProduct(
    request: RequestHTTP,
    param: string
  ): Promise<HttpResponse> {
    const updateProductUsecase = await this.usecaseProduct.updateProduct(
      request.body,
      param
    );
    return !updateProductUsecase
      ? clientError("Product not foud or you named a existent name")
      : ok(updateProductUsecase);
  }

  async getProductById(idParam: string): Promise<HttpResponse> {
    const getProductUsecase = await this.usecaseProduct.getProductById(idParam);
    return getProductUsecase
      ? ok(getProductUsecase)
      : clientError("product not found");
  }
}
