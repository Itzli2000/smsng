export type Product = {
  id: number;
  name: string;
  store: string;
  model: string;
};

export type DataStore = {
  products: Product[];
  setProducts: (products: Product[]) => void;
};
