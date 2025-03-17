import { useState, useEffect } from "react";

import { Product } from "@/types/Product";
import { CartItem, useCartHook } from "@/types/Cart";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";

export const useCart: useCartHook = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const removeFromCart = (product: Product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct && existingProduct.quantity > 1) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter((item) => item.id !== product.id);
      }
    });
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((acc, item) => {
    const price = item.promotional_price ?? item.price;
    return acc + price * (item.quantity || 1);
  }, 0);

  const cartQuantity = cart.reduce((acc, item) => {
    return acc + (item.quantity || 1);
  }, 0);

  return {
    cart,
    removeFromCart,
    removeAllFromCart,
    cartTotal,
    cartQuantity,
  };
};

export const useCartDispatch = useDispatch.withTypes<AppDispatch>()
export const useCartSelector = useSelector.withTypes<RootState>()