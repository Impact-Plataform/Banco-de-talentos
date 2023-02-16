export interface CurrencyProps {
  code: string;
  codeIn: string;
  name: string;
  high: string;
}

export class Currency {
  constructor(private props: CurrencyProps) {}
  get code() {
    return this.props.code;
  }
  get codeIn() {
    return this.props.codeIn;
  }
  get name() {
    return this.props.name;
  }
  get high() {
    return this.props.high;
  }
}
