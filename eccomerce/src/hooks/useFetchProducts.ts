import { useState } from "react";
import { Product } from "@/types/Product";

interface PaginationApiResponse {
  data: Product[];
  pages: number;
  prev: number;
  next: number;
  last: number;
}

const fetchPaginationFromApi = async (
  url: string
): Promise<PaginationApiResponse> => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState({
    totalPages: 0,
    prevPage: 0,
    nextPage: 0,
    lastPage: 0,
  });

  const fetchProducts = async (
    newPage: number,
    itemsPerPage: number,
    selectedValue: string
  ) => {
    const apiUrl = `https://api-prova-frontend.solucoeslifeapps.com.br/products?_page=${newPage}&_per_page=${itemsPerPage}&category=${selectedValue}`;
    const data = await fetchPaginationFromApi(apiUrl);
    setPagination({
      totalPages: data.pages,
      prevPage: data.prev,
      nextPage: data.next,
      lastPage: data.last,
    });
    setProducts(data.data);
  };

  const fetchAllProducts = async (): Promise<Product[]> => {
    const apiUrl = `https://api-prova-frontend.solucoeslifeapps.com.br/products`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  };

  return {
    products,
    fetchProducts,
    fetchAllProducts,
    pagination,
  };
};
