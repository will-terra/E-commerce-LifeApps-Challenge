"use client";

import Header from "@/components/atoms/Header";
import NavBar from "@/components/organisms/NavBar";
import ProductDetails from "@/components/organisms/ProductDetails";
import { Product, useAppContext } from "@/contexts/AppProvider";
import { useEffect, useState } from "react";

interface ProductDetailsProps {
  params: { name: string };
}

export default function Details({ params }: ProductDetailsProps) {
  const { name } = params;
  const { products } = useAppContext();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (products) {
      const foundProduct = products.find((product) => product.name === name);
      setProduct(foundProduct || null);
    }
  }, [name, products]);

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
