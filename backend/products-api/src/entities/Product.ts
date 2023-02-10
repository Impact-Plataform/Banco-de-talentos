export interface ProductProps {
  name: string;
  price: number;
  description: string;
}

export class Product {
  constructor(private props: ProductProps) {}

  get name() {
    return this.props.name;
  }
  get price() {
    return this.props.price;
  }
  get description() {
    return this.props.description;
  }
}
