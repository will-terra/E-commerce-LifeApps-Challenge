"use client";
import { useEffect, useState, use } from "react";

import ProductDetails from "@/components/organisms/ProductDetails";

import { useAppContext } from "@/contexts/AppProvider";

import { Product } from "@/types/Product";

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

export default function Details({ params }: ProductDetailsProps) {
  const { id } = use(params);
  const { allProducts } = useAppContext();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (allProducts) {
      const foundProduct = allProducts.find((product) => product.id === id);
      setProduct(foundProduct || null);
    }
  }, [allProducts, id]);

  return (
    <main className="mt-4 bg-gray-100">
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <div className="flex justify-center m-6 ">Carregando o produto...</div>
      )}
    </main>
  );
}
