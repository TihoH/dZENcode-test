type Price = {
  value: number;
  symbol: string;
  isDefault: number;
};
type Guarantee = {
  start: string;
  end: string;
};
export type Product = {
  id: number;
  serialNumber: number;
  isNew: number;
  photo: string;
  title: string;
  type: string;
  specification: string;
  guarantee: Guarantee;
  price: Price[];
  order: number;
  date: string;
  status: string
};

export type Order = {
  id: number;
  title: string;
  date: string;
  description: string;
  products: Product[];
};

export type deleteType = 'order' | 'product' | null