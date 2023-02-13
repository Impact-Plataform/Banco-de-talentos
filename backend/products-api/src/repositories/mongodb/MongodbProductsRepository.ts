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

  async getAllProducts(): Promise<any> {
    const productsCollection = MongoHelper.getCollection("products");
    const allProducts = await productsCollection.find({}).toArray();
    return allProducts;
  }
  async deleteByName(name: string): Promise<void> {
    const productsCollection = MongoHelper.getCollection("products");
    await productsCollection.findOneAndDelete({ name: name });
  }
}
