import { v4 as uuid } from "uuid";

export interface ProductProps {
  name: string;
  price: number;
  description: string;
  id: string;
}

export class Product {
  private readonly ProductId: string;
  constructor(private props: Omit<ProductProps, "id">) {
    this.ProductId = uuid();
  }

  get name() {
    return this.props.name;
  }
  get price() {
    return this.props.price;
  }
  get description() {
    return this.props.description;
  }
  get id() {
    return this.ProductId;
  }
}
