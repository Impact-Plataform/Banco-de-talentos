import { Request, Response } from "express";
import Product from "../../models/Product.model";
import CreateProductService from "../../services/Product/CreateProductService";
const productService = new CreateProductService();
class CreateProductController {
  async create(req: Request, res: Response) {
    try {
      const name: string = req.body.name;
      const price: number = req.body.price;
      const product: Product = await productService.create(name, price);
      return res.status(201).json(product);
    } catch (error: any) {
      return res.status(401).json({ error: error.message });
    }
  }
}

export default CreateProductController;
