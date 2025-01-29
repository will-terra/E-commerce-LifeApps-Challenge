import { Product } from "./Product";

export interface CartIconProps {
  ariaLabel: string;
}

export interface CartCardProps {
  product: CartItem;
}

export interface CartItem extends Product {
  quantity: number;
}
