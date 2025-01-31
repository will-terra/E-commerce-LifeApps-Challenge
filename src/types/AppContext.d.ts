import { CartItem } from "./Cart";
import { Product } from "./Product";

export interface AppContextProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  allProducts: Product[];
  products: Product[];
  fetchProducts: (
    newPage: number,
    itemsPerPage: number,
    selectedValue: string
  ) => Promise<void>;
  itemsPerPage: number;
  pagination: {
    totalPages: number;
    prevPage: number;
    nextPage: number;
    lastPage: number;
  };
  cart: CartItem[];
  cartTotal: number;
  cartQuantity: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeAllFromCart: () => void;
}
