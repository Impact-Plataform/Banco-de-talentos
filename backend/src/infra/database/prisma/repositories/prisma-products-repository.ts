import { Product } from '../../../../application/entities/product'
import { ProductsRepository, updatedProps } from '../../../../application/repositories/products-repository'
import { connection } from '../connection'
import { PrismaProductsMapper } from '../mappers/prisma-products-mapper'

export class PrismaProductsRepository implements ProductsRepository {
  public products: Product[] = []

  async create (product: Product): Promise<void> {
    await connection.product.create({
      data: {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: product.quantity
      }
    })
  }

  async load (): Promise<Product[]> {
    return this.products
  }

  async loadByName (name: string): Promise<Product> {
    const product = await connection.product.findUnique({ where: { name } })
    console.log(product)

    if (product) {
      return PrismaProductsMapper.toDomain(product)
    }
    return null
  }

  async loadById (id: string): Promise<Product> {
    const product = this.products.find((product) => product.id === id)
    return product
  }

  async update ({ id, data }: updatedProps): Promise<void> {
    const productUpdate = this.products.find((product) => product.id === id)
    productUpdate.setProps({ ...data })
  }

  async delete (productId: string): Promise<void> {
    const productsUpdated = this.products.filter(
      (product) => product.id !== productId
    )
    this.products = productsUpdated
  }
}
