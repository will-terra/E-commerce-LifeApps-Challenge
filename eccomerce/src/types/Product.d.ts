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

interface ApiResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Product[];
}
