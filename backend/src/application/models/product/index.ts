import { randomUUID } from "node:crypto";
import { Replace } from "../../../utils/replace";

interface productsProps {
  name: string;
  price: number;
  quantity: number;
  createdAt: Date;
}

export class Product {
  private props: productsProps;
  private _id: string;

  constructor(props: Replace<productsProps, { createdAt?: Date }>) {
    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get name() {
    return this.props.name
  }

  public get id() {
    return this._id
  }
}
