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