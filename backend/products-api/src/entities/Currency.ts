export interface CurrencyProps {
  code: string;
  codeIn: string;
  name: string;
  high: string;
}

export class Currency {
  constructor(private props: CurrencyProps) {}
}
