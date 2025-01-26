"use client";

import Header from "@/components/atoms/Header";
import NavBar from "@/components/organisms/NavBar";
import ProductDetails from "@/components/organisms/ProductDetails";
import { Product, useAppContext } from "@/contexts/AppProvider";
import { useEffect, useState, use } from "react";

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
    <div>
      <main>
        <Header />
        <NavBar />
        {product ? (
          <ProductDetails product={product} />
        ) : (
          <div>Carregando o produto...</div>
        )}
      </main>
    </div>
  );
}
