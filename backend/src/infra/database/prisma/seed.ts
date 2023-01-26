import { PrismaClient } from '@prisma/client'
import { randomUUID } from 'node:crypto'

const prisma = new PrismaClient()

async function main (): Promise<void> {
  await prisma.product.deleteMany()
  const products = [
    { id: randomUUID(), name: 'Mouse - Logitech', price: 29.99, quantity: 10, createdAt: new Date() },
    { id: randomUUID(), name: 'Teclado - Keychron', price: 49.99, quantity: 5, createdAt: new Date() },
    { id: randomUUID(), name: 'Monitor - Dell', price: 99.99, quantity: 2, createdAt: new Date() },
    { id: randomUUID(), name: 'Headphones - Sony', price: 39.99, quantity: 20, createdAt: new Date() },
    { id: randomUUID(), name: 'Webcam - Logitech', price: 24.99, quantity: 15, createdAt: new Date() },
    { id: randomUUID(), name: 'Speaker - JBL', price: 79.99, quantity: 8, createdAt: new Date() },
    { id: randomUUID(), name: 'Laptop - Lenovo', price: 999.99, quantity: 4, createdAt: new Date() },
    { id: randomUUID(), name: 'Tablet - iPad', price: 399.99, quantity: 10, createdAt: new Date() }
  ]
  for (const product of products) {
    await prisma.product.create({ data: { ...product } })
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
