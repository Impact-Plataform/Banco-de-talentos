import { Product } from '@prisma/client';
import { Request, Response } from 'express';

import { PrismaProductRepository } from '../../repositories/prismaProductRepository';

import { CreateProduct } from '../../use-cases/createProduct';
import { DeleteProduct } from '../../use-cases/deleteProduct';
import { GetProduct } from '../../use-cases/getProduct';
import { GetProducts } from '../../use-cases/getProducts';
import { UpdateProduct } from '../../use-cases/updateProduct';

const prismaProductRepository = new PrismaProductRepository();

const createProduct = new CreateProduct(prismaProductRepository);
const getProducts = new GetProducts(prismaProductRepository);
const getProduct = new GetProduct(prismaProductRepository);
const updateProduct = new UpdateProduct(prismaProductRepository);
const deleteProduct = new DeleteProduct(prismaProductRepository);

export class ProductController {

	async create(req: Request<unknown, unknown, Omit<Product, 'id'>>, res: Response) {
		const { amount, name, value } = req.body;

		const product = await createProduct.create({amount, name, value});
		return res.status(201).json({ product });
	}

	async get(req: Request, res: Response) {
		
		const products = await getProducts.get();
		
		return res.json({products});
	}

	async getById(req: Request<Pick<Product, 'id'>>, res: Response) {
		
		const { id } = req.params;

		const product = await getProduct.get(id);

		return res.json({product});
	}

	async update(req: Request<Pick<Product, 'id'>, unknown, Omit<Product, 'id'>>, res: Response) {
		
		const { amount, name, value } = req.body;
		const { id } = req.params;
    
		const product = await updateProduct.update(id, {amount, name, value});

		return res.json({product});
	}

	async delete(req: Request<Pick<Product, 'id'>>, res: Response) {
		const { id } = req.params;

		const product = await deleteProduct.delete(id);
		
		if (product) {
			return res.json({message: 'Produto deletado com sucesso'});
		}
	}
}