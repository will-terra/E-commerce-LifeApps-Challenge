import { CartItem } from "./Cart";
import { Product } from "./Product";

export interface AppContextProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  products: Product[];
  filteredProducts: Product[];
  cart: CartItem[];
  cartTotal: number;
  cartQuantity: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeAllFromCart: (product: Product) => void;
}
