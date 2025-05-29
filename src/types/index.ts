export interface Category {
  name: string;
  icon: string;
  color: string;
}

export interface Product {
  name: string;
  price: string;
  oldPrice?: string;
  image: string;
}
