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
}

export default ProductRepository;
