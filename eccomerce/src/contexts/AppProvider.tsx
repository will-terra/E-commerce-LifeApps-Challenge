"use client";
import React, {
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
  data: Product[];
}

const AppContext = createContext<AppContextProps>({
  selectedValue: "Todos",
  setSelectedValue: () => {},
  data: [],
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

  return (
    <AppContext.Provider value={{ selectedValue, setSelectedValue, data }}>
      {children}
    </AppContext.Provider>
  );
};
