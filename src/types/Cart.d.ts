import { Product } from "./Product";

export interface CartIconProps {
  ariaLabel: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartCardProps {
  product: CartItem;
}

export interface useCartHook {
  (): {
    cart: CartItem[];
    removeFromCart: (product: Product) => void;
    removeAllFromCart: () => void;
    cartTotal: number;
    cartQuantity: number;
  };
}
