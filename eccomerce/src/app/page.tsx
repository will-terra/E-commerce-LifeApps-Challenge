"use client";

import Filter from "@/components/molecules/Filter";
import ProductGrid from "@/components/organisms/ProductGrid";

export default function Home() {
  return (
    <main className="mt-4">
      <Filter />
      <ProductGrid />
    </main>
  );
}
