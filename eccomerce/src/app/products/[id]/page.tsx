"use client";
import { useEffect, useState, use } from "react";

import ProductDetails from "@/components/organisms/ProductDetails";

import { useAppContext } from "@/contexts/AppProvider";

import { Product } from "@/types/Product";

interface ProductDetailsProps {
  params: Promise<{ id: number }>;
}

export default function Details({ params }: ProductDetailsProps) {
  const { id } = use(params);
  const { products } = useAppContext();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (products) {
      const foundProduct = products.find((product) => product.id === id);
      setProduct(foundProduct || null);
    }
  }, [products, id]);

  return (
    <main className="mt-4 bg-gray-100">
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <div>Carregando o produto...</div>
      )}
    </main>
  );
}
