"use client"
import { use } from "react";
import ProductDetails from "@/components/organisms/ProductDetails";
import { useProductsSelector } from "@/hooks/useProducts";

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

export default function Details({ params }: ProductDetailsProps) {
  const { id } = use(params);
  const product = useProductsSelector((state) => state.products.products.find((product) => product.id === id));

  return (
    <main className="py-8 bg-gray-100">
      {product ? (
        <ProductDetails product={product} />
      ) : (
        <div className="flex justify-center m-6 ">Carregando o produto...</div>
      )}
    </main>
  );
}
