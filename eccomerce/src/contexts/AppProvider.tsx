"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { AppContextProps } from "@/types/AppContext";
import { useFetchProducts } from "@/hooks/useFetchProducts";
import { useCart } from "@/hooks/useCart";

const AppContext = createContext<AppContextProps>({
  selectedValue: "",
  setSelectedValue: () => {},
  products: [],
  filteredProducts: [],
  cart: [],
  cartTotal: 0,
  cartQuantity: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  removeAllFromCart: () => {},
} as AppContextProps);

export const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppProviderProps> = ({
  children,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("");
  const { products, fetchProducts } = useFetchProducts();
  const {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    cartTotal,
    cartQuantity,
  } = useCart();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = products.filter((item) => {
    return selectedValue !== "" ? item.category === selectedValue : item;
  });

  return (
    <AppContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        products,
        filteredProducts,
        cart,
        cartTotal,
        cartQuantity,
        addToCart,
        removeFromCart,
        removeAllFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
