export interface Product {
  id: string;
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

export interface ApiResponse {
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
  items: number;
  data: Product[];
}

export interface PaginationApiResponse {
  data: Product[];
  pages: number;
  prev: number;
  next: number;
  last: number;
}

export interface useFetchProductsHook {
  (): {
    products: Product[];
    fetchProducts: (
      newPage: number,
      itemsPerPage: number,
      selectedValue: string
    ) => Promise<PaginationApiResponse>;
    pagination: {
      prevPage: number | null;
      nextPage: number | null;
      lastPage: number;
    };
  };
}
