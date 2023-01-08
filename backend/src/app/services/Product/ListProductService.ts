import { Op, Order, OrderItem } from "sequelize";
import { parseISO } from "date-fns";
import ProductRepository from "../../repositories/Product/ProductRepository";
import Product from "../../models/Product.model";

const productRepository = new ProductRepository();

class ListProductService {
  async list(
    name: string,
    price: number,
    createdBefore: string,
    createdAfter: string,
    updatedBefore: string,
    updatedAfter: string,
    sort: string,
    page: number,
    limit: number
  ): Promise<Product[]> {
    let where = {};

    if (name) {
      where = {
        ...where,
        name: {
          [Op.like]: name,
        },
      };
    }
    if (price) {
      where = {
        ...where,
        price: {
          [Op.like]: price,
        },
      };
    }

    if (createdBefore) {
      where = {
        ...where,
        created_at: {
          [Op.lte]: parseISO(createdBefore),
        },
      };
    }

    if (createdAfter) {
      where = {
        ...where,
        created_at: {
          [Op.gte]: parseISO(createdAfter),
        },
      };
    }

    if (updatedBefore) {
      where = {
        ...where,
        updated_at: {
          [Op.lte]: parseISO(updatedBefore),
        },
      };
    }

    if (updatedAfter) {
      where = {
        ...where,
        updated_at: {
          [Op.gte]: parseISO(updatedAfter),
        },
      };
    }

    let order: Order = [];
    if (sort) {
      order = sort.split(",").map((item) => item.split(":") as OrderItem);
    }

    return await productRepository.list(where, order, limit, page);
  }
}

export default ListProductService;
