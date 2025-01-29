export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount_percentage: number;
  promotional_price: number;
  image: string;
  description: string;
}

export interface ProductDetailsProps {
  product: Product;
}
