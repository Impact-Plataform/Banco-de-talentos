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
}

export default ProductRepository;
