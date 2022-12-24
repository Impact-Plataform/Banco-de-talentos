import { Order } from "sequelize";
import Product from "../../models/Product.model";

class ProductRepository {
  async list(
    where: {},
    order: Order,
    limit: number,
    page: number
  ): Promise<Product[]> {
    const offset = limit * page - limit;
    const data: Product[] = await Product.findAll({
      where,
      order,
      limit,
      offset,
    });

    return data;
  }
  async create(product: { name: string; price: number }): Promise<Product> {
    const prod: Product = await Product.create<Product>(product);
    return prod;
  }

  async update(
    product: Product,
    name: string,
    price: number
  ): Promise<Product> {
    return await product.update({ name, price });
  }

  async delete(product: Product): Promise<{}> {
    await product.destroy();
    return { sucesso: "O produto foi excluído" };
  }
}

export default ProductRepository;
