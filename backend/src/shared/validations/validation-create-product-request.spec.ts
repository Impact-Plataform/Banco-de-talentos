import { describe, expect, it } from 'vitest'
import { validateRequest } from './validation-create-product-request'

describe('Validate request', () => {
  it('should validate request', () => {
    const isvalid = validateRequest.parse({
      name: 'string',
      price: 1,
      quantity: 10
    })

    expect(isvalid).toBeTruthy()
  })

  it('should return error when request is invalid', () => {
    try {
      validateRequest.parse({
        name: 'string',
        price: ''
      })
    } catch (e) {
      expect(e).toBeTruthy()
    }
  })
})
