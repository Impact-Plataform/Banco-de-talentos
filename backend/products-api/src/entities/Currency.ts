export interface CurrencyProps {
  code: string;
  codein: string;
  name: string;
  high: string;
}

export class Currency {
  constructor(private props: CurrencyProps) {}
  get code() {
    return this.props.code;
  }
  get codein() {
    return this.props.codein;
  }
  get name() {
    return this.props.name;
  }
  get high() {
    return this.props.high;
  }
}
