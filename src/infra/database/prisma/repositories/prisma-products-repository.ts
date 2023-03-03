import { Product } from '../../../../application/entities/product'
import {
  ProductsRepository,
  updatedProps
} from '../../../../application/repositories/products-repository'
import { connection } from '../connection'
import { PrismaProductsMapper } from '../mappers/prisma-products-mapper'

export class PrismaProductsRepository implements ProductsRepository {
  public products: Product[] = []

  async create (product: Product): Promise<void> {
    const raw = PrismaProductsMapper.toPrisma(product)
    await connection.product.create({ data: raw })
  }

  async load (): Promise<Product[]> {
    const allProducts = await connection.product.findMany()
    return allProducts.map((product) => PrismaProductsMapper.toDomain(product))
  }

  async loadByName (name: string): Promise<Product> {
    const product = await connection.product.findUnique({ where: { name } })
    if (!product) return
    return PrismaProductsMapper.toDomain(product)
  }

  async loadById (id: string): Promise<Product> {
    const product = await connection.product.findUnique({ where: { id } })
    if (!product) return
    return PrismaProductsMapper.toDomain(product)
  }

  async update ({ id, data }: updatedProps): Promise<void> {
    await connection.product.update({ where: { id }, data: { ...data } })
  }

  async delete (productId: string): Promise<void> {
    await connection.product.delete({ where: { id: productId } })
  }
}
