import { useState, useEffect } from "react";

import { Product } from "@/types/Product";
import { CartItem, useCartHook } from "@/types/Cart";

export const useCart: useCartHook = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    if (cart.length === 0) {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existingProduct = prev.find((item) => item.id === product.id);
      if (existingProduct) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

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
    addToCart,
    removeFromCart,
    removeAllFromCart,
    cartTotal,
    cartQuantity,
  };
};
