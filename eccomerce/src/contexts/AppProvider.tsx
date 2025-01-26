"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount_percentage: number;
  promotional_price: number;
  image: string;
  description: string;
}

interface AppContextProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  filteredData: Product[];
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

const AppContext = createContext<AppContextProps>({
  selectedValue: "",
  setSelectedValue: () => {},
  filteredData: [],
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
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
  const [selectedValue, setSelectedValue] = useState<string>("Todos");
  const [data, setData] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api-prova-frontend.solucoeslifeapps.com.br/products"
      );
      const result = await response.json();
      setData(Array.isArray(result) ? result : [result]);
    };
    fetchData();
  }, []);

  const filteredData = data.filter((item) => {
    return selectedValue !== "" ? item.category === selectedValue : item;
  });

  function addToCart(product: Product) {
    setCart((prev) => [...prev, product]);
  }

  function removeFromCart(product: Product) {
    setCart((prev) => prev.filter((item) => item.id !== product.id));
  }

  return (
    <AppContext.Provider
      value={{
        selectedValue,
        setSelectedValue,
        filteredData,
        cart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
