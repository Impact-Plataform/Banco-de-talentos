interface ProductProps {
  name: string,
  price: number,
  description: string
}

export class Product {
  constructor(private props: ProductProps) {}
}