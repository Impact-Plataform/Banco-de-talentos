import { IProductRepository } from "../ports/IProductRepository";

export class InMemoryProductRepo implements IProductRepository {
 
  async findProductByName(name: string): Promise<boolean> {
    return true
  }
  
}