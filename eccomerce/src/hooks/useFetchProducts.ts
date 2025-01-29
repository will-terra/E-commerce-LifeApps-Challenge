import { useState } from "react";

import { Product } from "@/types/Product";

const itemsPerPage = 6;

export const useFetchProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [prevPage, setPrevPage] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>(0);
  const [lastPage, setLastPage] = useState<number>(0);
  const fetchProducts = async (newPage: number, itemsPerPage: number) => {
    const apiUrl = `https://api-prova-frontend.solucoeslifeapps.com.br/products?_page=${newPage}&_per_page=${itemsPerPage}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    const totalPages = data.pages;
    setTotalPages(totalPages);
    setProducts(data.data);
    setPrevPage(data.prev);
    setNextPage(data.next);
    setLastPage(data.last);
  };

  return {
    products,
    fetchProducts,
    totalPages,
    prevPage,
    nextPage,
    lastPage,
    itemsPerPage,
  };
};
