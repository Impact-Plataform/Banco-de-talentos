import { Product, ProductProps } from "../../entities/Product";
import { IProductRepository } from "../ports/IProductRepository";
import { MongoHelper } from "./helper/mongoHelper";

export class MongodbProductsRepository implements IProductRepository {
  async create(product: ProductProps): Promise<void> {
    const productsCollection = MongoHelper.getCollection("products");
    await productsCollection.insertOne(product);
  }

  async findProductByName(name: string): Promise<any | boolean> {
    const productsCollection = MongoHelper.getCollection("products");
    const productExists = await productsCollection.findOne({ name: name });
    return productExists || false;
  }

  async findProductById(id: string): Promise<any> {
    const productsCollection = MongoHelper.getCollection("products");
    const productExists = await productsCollection.findOne({ id: id });
    return productExists || false;
  }

  async getAllProducts(): Promise<any> {
    const productsCollection = MongoHelper.getCollection("products");
    const allProducts = await productsCollection.find({}).toArray();
    return allProducts;
  }
  async deleteById(id: string): Promise<void> {
    const productsCollection = MongoHelper.getCollection("products");
    await productsCollection.findOneAndDelete({ id: id });
  }

  async updateProduct(
    id: string,
    name?: string,
    price?: number,
    description?: string
  ): Promise<any> {
    const productsCollection = MongoHelper.getCollection("products");
    const originalProduct = await this.findProductById(id);
    const [originalName, originalPrice, originalDescription] = [
      originalProduct.name,
      originalProduct.price,
      originalProduct.description,
    ];
    const productUpdate = await productsCollection.replaceOne(
      { id: id },
      {
        name: name || originalName,
        price: price || originalPrice,
        description: description || originalDescription,
        id,
      }
    );
    return productUpdate;
  }
}
