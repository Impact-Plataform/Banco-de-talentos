import { z } from 'zod'

export const validateRequest = z.object({
  name: z.string(),
  price: z.number(),
  quantity: z.number()
}).required()
