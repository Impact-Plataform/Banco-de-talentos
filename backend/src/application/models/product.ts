import { randomUUID } from "node:crypto";
import { AppError } from "../../errors/app-error";
import { Replace } from "../../utils/replace";

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
    if (props.quantity <= 0) {
      throw new AppError("Unable to add 0 products");
    }

    this._id = randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get name() {
    return this.props.name;
  }

  public get price() {
    return this.props.price;
  }

  public get quantity() {
    return this.props.quantity;
  }

  public get createdAt() {
    return this.props.createdAt;
  }

  public get id() {
    return this._id;
  }
}
