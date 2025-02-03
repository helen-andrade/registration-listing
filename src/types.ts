export type Product = {
  id: string;
  name: string;
  description: string;
  value: string;
  isAvailableForSale: boolean;
};

export type NewProduct = {
  name: string;
  description: string;
  value: string;
  isAvailableForSale: boolean;
};