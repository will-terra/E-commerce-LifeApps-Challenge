import { CartItem } from "./Cart";
import { PaginationApiResponse, Product } from "./Product";

export interface AppContextProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  allProducts: Product[];
  products: Product[];
  fetchProducts: (
    newPage: number,
    itemsPerPage: number,
    selectedValue: string
  ) => Promise<PaginationApiResponse>;
  itemsPerPage: number;
  pagination: {
    totalPages: number;
    prevPage: number | null;
    nextPage: number | null;
    lastPage: number;
  };
  cart: CartItem[];
}
