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
import { Product } from "@/types/Product";

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
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const { products, fetchProducts, fetchAllProducts, pagination } =
    useFetchProducts();

  const itemsPerPage = 4;
  const {
    cart,
    addToCart,
    removeFromCart,
    removeAllFromCart,
    cartTotal,
    cartQuantity,
  } = useCart();

  useEffect(() => {
    fetchProducts(1, itemsPerPage, "");
  }, []);

  useEffect(() => {
    fetchAllProducts().then((data) => {
      setAllProducts(data);
    });
  }, []);

  useEffect(() => {
    fetchProducts(1, itemsPerPage, selectedValue);
  }, [selectedValue]);

  return (
    <AppContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        allProducts,
        products,
        fetchProducts,
        pagination,
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
