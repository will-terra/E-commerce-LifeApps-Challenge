import { useState } from "react";

import { Product } from "@/types/Product";

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const response = await fetch(
      "https://api-prova-frontend.solucoeslifeapps.com.br/products"
    );
    const result = await response.json();
    setProducts(Array.isArray(result) ? result : [result]);
  };

  return { products, fetchProducts };
};
