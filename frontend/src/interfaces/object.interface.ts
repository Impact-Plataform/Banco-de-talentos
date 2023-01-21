export interface ObjectStringInterface {
  [key: string]: string | undefined;
}

export interface FilterInterface {
  name: string;
  filter: string;
}

export interface AllFiltersInterface {
  [key: string]: Array<Partial<FilterInterface>> | undefined;
}
