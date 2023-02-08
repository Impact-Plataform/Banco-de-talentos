export interface IProductRepository {
  findProductByName(name: string): Promise<boolean>
}