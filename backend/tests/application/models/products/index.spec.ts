import { describe, expect, it } from "vitest";
import { Product } from "../../../../src/application/models/product"; 

describe('Product', () => {
  it('should be able to create a new product', () => {
    const productsProps = {
      name: 'Mouse - RedDragon',
      price: 55.99,
      quantity: 10
    };

    const product = new Product(productsProps);

    expect(product).toBeTruthy();
  });
});