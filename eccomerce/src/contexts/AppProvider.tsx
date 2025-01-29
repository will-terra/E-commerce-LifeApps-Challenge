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

const AppContext = createContext<AppContextProps | undefined>(undefined);

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
  const {
    products,
    fetchProducts,
    totalPages,
    prevPage,
    nextPage,
    lastPage,
    itemsPerPage,
  } = useFetchProducts();

  const {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    cartTotal,
    cartQuantity,
  } = useCart();

  useEffect(() => {
    fetchProducts(1, 6, "");
  }, []);

  useEffect(() => {
    fetchProducts(1, 6, selectedValue);
  }, [selectedValue]);

  return (
    <AppContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        products,
        fetchProducts,
        totalPages,
        prevPage,
        nextPage,
        lastPage,
        itemsPerPage,
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
