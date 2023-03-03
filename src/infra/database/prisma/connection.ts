import { PrismaClient } from '@prisma/client'

export const connection = new PrismaClient({ log: ['query'] })
