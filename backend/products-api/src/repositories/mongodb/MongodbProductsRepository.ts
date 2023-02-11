import { ProductProps } from "../../entities/Product";
import { IProductRepository } from "../ports/IProductRepository";
import { MongoHelper } from "./helper/mongoHelper";

export class MongodbProductsRepository implements IProductRepository {
  async create(product: ProductProps): Promise<void> {
    const productsCollection = MongoHelper.getCollection("products");
    await productsCollection.insertOne(product);
  }

  async findProductByName(name: string): Promise<boolean> {
    const productsCollection = MongoHelper.getCollection("products");
    const exists = await productsCollection.findOne({ name: name });
    return exists !== null ? true : false;
  }
}
