"use client";

import Filter from "@/components/molecules/Filter";
import ProductGrid from "@/components/organisms/ProductGrid";

export default function Home() {
  return (
    <main className="mt-4 bg-gray-100">
      <Filter />
      <ProductGrid />
    </main>
  );
}
