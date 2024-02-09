export type Product = {
  createdAt: string;
  name: string;
  image: string;
  price: string;
  description: string;
  model: string;
  brand: string;
  id: string;
};

export type Basket = {
  productId: string;
  productName: string;
  productPrice: number;
  quantity: number;
};

export type Option = {
  label: string;
  value: string;
};

export type Filter = {
  property: string;
  value: string;
};
