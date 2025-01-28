"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  discount_percentage: number;
  promotional_price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface AppContextProps {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  products: Product[];
  filteredProducts: Product[];
  cart: CartItem[];
  cartTotal: number;
  cartQuantity: number;
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
}

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
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://api-prova-frontend.solucoeslifeapps.com.br/products"
      );
      const result = await response.json();
      setProducts(Array.isArray(result) ? result : [result]);
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter((item) => {
    return selectedValue !== "" ? item.category === selectedValue : item;
  });

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: Product) {
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
  }

  function removeFromCart(product: Product) {
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
  }

  const cartTotal = cart.reduce((acc, item) => {
    const price = item.promotional_price ?? item.price;
    return acc + price * (item.quantity || 1);
  }, 0);

  const cartQuantity = cart.reduce((acc, item) => {
    return acc + (item.quantity || 1);
  }, 0);

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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
