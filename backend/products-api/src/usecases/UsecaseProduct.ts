import { Product, ProductProps } from "../entities/Product";
import { IProductRepository } from "../repositories/ports/IProductRepository";
import { QuotationApi } from "../services/QuotationApi";

interface CreateProductRequest {
  name: string;
  price: number;
  description: string;
}

interface DeleteProductRequestParam {
  name: string;
}

interface UpdateProductProps {
  name?: string;
  price?: number;
  description?: string;
}

type ResponseCreateProduct = Promise<any | false>;
type ResponseGetProducts = Promise<any[]>;

export class UsecaseProduct {
  constructor(private repository: IProductRepository, quotationService: QuotationApi) {}

  async create({
    name,
    price,
    description,
  }: CreateProductRequest): ResponseCreateProduct {
    const productAlreadyExists = await this.repository.findProductByName(name);

    if (!!productAlreadyExists) {
      return false;
    }

    const product = new Product({ name, price, description });
    const productProps = {
      name: product.name,
      price: product.price,
      description: product.description,
      id: product.id,
    };
    await this.repository.create(productProps);

    return productProps;
  }

  async getAllProducts(): Promise<ResponseGetProducts> {
    const products = await this.repository.getAllProducts();

    return products;
  }

  async deleteById(id: string): Promise<boolean> {
    const productExists = await this.repository.findProductById(id);
    if (!productExists) {
      return false;
    }
    await this.repository.deleteById(id);
    return true;
  }

  async updateProduct(
    { name, price, description }: UpdateProductProps,
    id: string
  ): Promise<any> {
    const productExists = await this.repository.findProductById(id);

    if (!productExists) {
      return false;
    }

    const existsOtherProductWithThisName = async () => {
      const nameReceivedIsOrinal = name === productExists.name;
      if (nameReceivedIsOrinal) return false;

      const nameAlreadyExists = await this.repository.findProductByName(name);
      if (nameAlreadyExists) {
        return true;
      }
    };

    const repeatedName = await existsOtherProductWithThisName();

    if (repeatedName) {
      return false;
    }

    const updatedProduct = await this.repository.updateProduct(
      id,
      name,
      price,
      description
    );

    const findUpdatedProduct: ProductProps =
      await this.repository.findProductById(id);

    return findUpdatedProduct;
  }

  convertCurrency(priceInBRL: number, currency: number) {
    const result = priceInBRL / currency
    return result
  }

  async getProductById(id: string): Promise<any | false> {
    const findProduct = await this.repository.findProductById(id);
    return findProduct || false;
  }
}
