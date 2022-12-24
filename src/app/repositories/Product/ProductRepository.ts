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
  async create(product: { name: string; price: number }) {
    const prod: Product = await Product.create<Product>(product);
    return prod;
  }

  async update(product: Product, name: string, price: number) {
    return await product.update({ name, price });
  }
}

export default ProductRepository;
