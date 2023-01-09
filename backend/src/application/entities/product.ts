import { randomUUID } from "node:crypto";
import { AppError } from "../../shared/errors/app-error";
import { Replace } from "../../shared/helpers/replace";

interface productProps {
  name: string;
  price: number;
  quantity: number;
  createdAt: Date;
}

export class Product {
  private props: productProps;
  private _id: string;

  constructor(props: Replace<productProps, { createdAt?: Date }>) {
    if (props.quantity <= 0) {
      throw new AppError("Quantity must be positive");
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

  public setProps({ name, price, quantity }: updatedProps) {
    this.props.name = name;
    this.props.price = price;
    this.props.quantity = quantity;
  }
}

interface updatedProps {
  name: string;
  price: number;
  quantity: number;
}
